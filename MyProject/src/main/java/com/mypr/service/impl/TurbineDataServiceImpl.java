package com.mypr.service.impl;

import com.mypr.entity.TurbineData;
import com.mypr.repository.TurbineDataRepository;
import com.mypr.service.TurbineDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TurbineDataServiceImpl implements TurbineDataService {
    @Autowired
    private TurbineDataRepository turbineDataRepository;
    @Override
    public List<double[]> getBaseTurbineData() {
        List<double[]> response;
        try {
            List<TurbineData> turbineDataList = turbineDataRepository.findTop200ByOrderByIdDesc();
            turbineDataList = removeDuplicates(turbineDataList);
            turbineDataList.sort((data1, data2) -> data1.getTimestamp().compareTo(data2.getTimestamp()));
            response = convertTurbineData(turbineDataList);
        }catch (Exception e){
            e.printStackTrace();
            return Collections.emptyList();
        }
        return response;
    }


    private List<double[]> convertTurbineData(List<TurbineData> turbineDataList){
        List<double[]> result = new ArrayList<>();
        TimeZone vietnamTimeZone = TimeZone.getTimeZone("Asia/Ho_Chi_Minh");
        for (TurbineData turbineData: turbineDataList
        ) {
            double[] data = new double[2];
            data[0] = turbineData.getTimestamp().getTime() + vietnamTimeZone.getRawOffset();
            data[1] = turbineData.getEnergyTotalLo();
            result.add(data);
        }
        return result;
    }

    // Hàm loại bỏ các bản ghi có timestamp giống nhau
    private List<TurbineData> removeDuplicates(List<TurbineData> turbineDataList) {
        Set<Date> seenTimestamps = new HashSet<>();
        List<TurbineData> uniqueTimestamps = new ArrayList<>();

        for (TurbineData turbineData : turbineDataList) {
            if (seenTimestamps.add(turbineData.getTimestamp())) {
                uniqueTimestamps.add(turbineData);
            }
        }

        return uniqueTimestamps;
    }
}
