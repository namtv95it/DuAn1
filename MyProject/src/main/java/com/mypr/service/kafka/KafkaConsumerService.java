//package com.mypr.service.kafka;
//
//import com.mypr.model.response.AjaxResult;
//import org.springframework.kafka.annotation.KafkaListener;
//import org.springframework.stereotype.Service;
//
//@Service
//public class KafkaConsumerService {
//
//    @KafkaListener(topics = "turbine-data", groupId = "my-consumer-group", containerFactory = "kafkaListenerJsonFactoryMess")
//    public void listen(AjaxResult response) {
//        System.out.println("Received message:");
//        System.out.println("Value: " + response.getMessage());
//    }
//
//
//
//@KafkaListener(topics = "${kafka.topic-default}", groupId = "${kafka.group-id}")
//public void receiveMessage(ConsumerRecord<String, String> record) {
//        try {
//        // Xử lý tin nhắn nhận được từ Kafka
//        String responseStr = record.value();
//        ObjectMapper objectMapper = new ObjectMapper();
//        AjaxResult result = objectMapper.readValue(responseStr, AjaxResult.class);
//        System.out.println("===================================================Received message: " + result.getMessage() + "==================================================");
//        } catch (JsonProcessingException e) {
//        throw new RuntimeException(e);
//        }
//        // Thực hiện xử lý tiếp theo tùy vào yêu cầu của bạn
//        }
//}