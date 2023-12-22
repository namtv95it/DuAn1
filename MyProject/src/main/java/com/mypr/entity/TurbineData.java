package com.mypr.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "turbineData")
public class TurbineData {
    @Id
    private String id;
    private double ambientTemp;
    private int currentR;
    private int currentS;
    private int currentT;
    private int digitalInput1;
    private int digitalInput2;
    private int energy;
    private int energyTotalHi;
    private int energyTotalLo;
    private int errorCd;
    private String errorCdName;
    private double gearboxTemp;
    private int generatorSpeed;
    private double generatorTemp;
    private int mode;
    private int power;
    private int relayOutput0;
    private int rotorSpeed;
    private int runStopCd;
    private String runStopCdName;
    private int serviceCd;
    private String serviceCdName;
    private int statusCd;
    private String statusCdName;
    private Date timestamp;
    private int turbineCommId;
    private double vibrationBand1;
    private double vibrationBand2;
    private double vibrationBand3;
    private double vibrationBand4;
    private double vibrationBand5;
    private double vibrationBand6;
    private double vibrationBand7;
    private double vibrationBand8;
    private double voltageR;
    private double voltageS;
    private double voltageT;
    private double windSpeed;
}
