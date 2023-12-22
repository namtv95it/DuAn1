package com.mypr.model;

import java.security.Principal;

public class UserWs implements Principal {
    private String name;

    public UserWs(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }
}
