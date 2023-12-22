package com.mypr.service.kafka;

import com.mypr.model.response.AjaxResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducerService {

    private final KafkaTemplate<String, AjaxResult> kafkaTemplate;

    @Value("${kafka.topic-default}")
    private String defaultTopic; // Tên của topic đã được tạo mặc định

    @Autowired
    public KafkaProducerService(KafkaTemplate<String, AjaxResult> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    // Gửi tin nhắn với key mặc định và topic mặc định
    public void sendMessage(AjaxResult message) {
        kafkaTemplate.send(defaultTopic, message);
    }

    // Gửi tin nhắn với key mặc định và topic được chỉ định
    public void sendMessage(String topicName, AjaxResult message) {
        kafkaTemplate.send(topicName, message);
    }
}
