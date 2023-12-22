package com.mypr.service.sse;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

public interface SseService {
    SseEmitter subscribe();
    void sendData(String dataStr);
    boolean isEmitterExists();
}
