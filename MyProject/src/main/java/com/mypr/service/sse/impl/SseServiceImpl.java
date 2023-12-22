package com.mypr.service.sse.impl;

import com.mypr.service.sse.SseService;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class SseServiceImpl implements SseService {
    private final CopyOnWriteArrayList<SseEmitter> emitters = new CopyOnWriteArrayList<>();

    @Override
    public SseEmitter subscribe() {
        SseEmitter emitter = new SseEmitter(-1L);
        emitters.add(emitter);

        emitter.onTimeout(() -> {
            emitters.remove(emitter);
            emitter.complete();
        });

        emitter.onCompletion(() -> emitters.remove(emitter));

        return emitter;
    }

    @Override
    public void sendData(String dataStr) {
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(SseEmitter.event().data(dataStr));
            } catch (IOException e) {
                emitters.remove(emitter);
                emitter.complete();
            }
        }
    }

    @Override
    public boolean isEmitterExists() {
        // Kiểm tra nếu đã tồn tại emitter với cùng một id
        return !emitters.isEmpty();
    }

}
