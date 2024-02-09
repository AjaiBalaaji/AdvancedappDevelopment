package com.event.event.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Addeventdto {
    private Long eventid;
    private String eventtype;
    private String description;
    private String eventpackage;
    private String participantcount; // Changed to String to match Addentity
    private int charge; // This was correct as per Addentity
}
