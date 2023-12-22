package com.mypr.repository;

import com.mypr.entity.TurbineData;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface TurbineDataRepository extends MongoRepository<TurbineData, String> {
    TurbineData findFirstByOrderByIdDesc();
    TurbineData findTop1ByTimestampBeforeOrderByTimestampDesc(Date timestamp);
    List<TurbineData> findTop200ByOrderByIdDesc();
    List<TurbineData> findTop100ByTimestampBeforeOrderByTimestampDesc(Date timestamp);
}
