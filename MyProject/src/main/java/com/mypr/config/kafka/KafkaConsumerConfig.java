//package com.mypr.config.kafka;
//
//import com.mypr.entity.TurbineData;
//import org.apache.kafka.clients.consumer.ConsumerConfig;
//import org.apache.kafka.common.serialization.StringDeserializer;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.kafka.annotation.EnableKafka;
//import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
//import org.springframework.kafka.core.ConsumerFactory;
//import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
//import org.springframework.kafka.listener.KafkaListenerErrorHandler;
//import org.springframework.kafka.support.converter.StringJsonMessageConverter;
//import org.springframework.kafka.support.serializer.JsonDeserializer;
//
//import java.util.HashMap;
//import java.util.Map;
//
//@Configuration
//@EnableKafka
//public class KafkaConsumerConfig {
//
//    private final Logger logger = LoggerFactory.getLogger(getClass());
//
//    @Value("${kafka.bootstrap-servers}")
//    private String bootstrapServers;
//
//    @Value("${kafka.group-id}")
//    private String groupId;
//
//    @Bean
//    public ConsumerFactory<String, TurbineData> consumerFactoryMess() {
//        Map<String, Object> config = new HashMap<>();
//        config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
//        config.put(ConsumerConfig.GROUP_ID_CONFIG, groupId);
//        config.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");
//        config.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false);
//        config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
//        config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
//        return new DefaultKafkaConsumerFactory<>(config, new StringDeserializer(), new JsonDeserializer<>(TurbineData.class));
//    }
//    @Bean
//    public ConcurrentKafkaListenerContainerFactory<?, ?> kafkaListenerJsonFactoryMess() {
//        ConcurrentKafkaListenerContainerFactory<String, TurbineData> factory = new ConcurrentKafkaListenerContainerFactory<>();
//        factory.setConsumerFactory(consumerFactoryMess());
//        factory.setMessageConverter(new StringJsonMessageConverter());
//        factory.setBatchListener(true);
//        return factory;
//    }
//    @Bean
//    public KafkaListenerErrorHandler myTopicErrorHandler() {
//        return (m, e) -> {
//            logger.error("Got an error {}", e.getMessage());
//            return "some info about the failure";
//        };
//    }
//
//}
