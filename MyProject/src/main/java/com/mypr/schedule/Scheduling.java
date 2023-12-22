package com.mypr.schedule;
import com.mypr.entity.TurbineData;
import com.mypr.model.response.AjaxResult;
import com.mypr.repository.TurbineDataRepository;
import com.mypr.service.kafka.KafkaProducerService;
import com.mypr.service.sse.SseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

@Configuration
@EnableScheduling
@EnableAsync
public class Scheduling {
    @Autowired
    private KafkaProducerService kafkaProducerService;

    @Autowired
    private SseService sseService;

    @Autowired
    private TurbineDataRepository turbineDataRepository;

    @Scheduled(fixedRate = 5000)
    public void sendDataSSE() {
        try {
            if (sseService.isEmitterExists()){
                sseService.sendData("Sse data!");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @Async
    @Scheduled(fixedRate = 3000)
    public void sendMessageToConsumer() {
        try {
            AjaxResult ajaxResult = new AjaxResult();
            Date nowDate = new Date();
            TurbineData turbineData = turbineDataRepository.findTop1ByTimestampBeforeOrderByTimestampDesc(nowDate);
            LocalDateTime now = LocalDateTime.now();
            LocalDateTime turbineDataTimestamp = LocalDateTime.ofInstant(turbineData.getTimestamp().toInstant(), ZoneId.systemDefault());
            LocalDateTime dateTime2 = LocalDateTime.now().plusSeconds(6);
            long secondsDifference = java.time.Duration.between(turbineDataTimestamp, now).toSeconds();
//                            long secondsDifference = java.time.Duration.between(now, dateTime2).toSeconds();
            if (secondsDifference > 5) {
                ajaxResult.setStatus(false);
                ajaxResult.setResponseData(secondsDifference);
            } else {
                double[] data = new double[2];
                TimeZone vietnamTimeZone = TimeZone.getTimeZone("Asia/Ho_Chi_Minh");
                data[0] = turbineData.getTimestamp().getTime() + vietnamTimeZone.getRawOffset();
                data[1] = turbineData.getEnergyTotalLo();
                ajaxResult.setStatus(true);
                ajaxResult.setResponseData(data);
            }
                kafkaProducerService.sendMessage(ajaxResult);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
