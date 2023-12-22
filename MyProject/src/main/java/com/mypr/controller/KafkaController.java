package com.mypr.controller;

import com.mypr.model.response.AjaxResult;
import com.mypr.service.kafka.KafkaProducerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/public")
public class KafkaController {
    @Autowired
    private KafkaProducerService kafkaProducerService;

    @PostMapping("sendMessageToTopic")
    public void sendMessageToTopic(@RequestParam String message) {
        try {
            AjaxResult response = new AjaxResult();
            response.setStatus(true);
            response.setMessage(message);
            kafkaProducerService.sendMessage(response);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
