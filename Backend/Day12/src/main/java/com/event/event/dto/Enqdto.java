package com.event.event.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Enqdto {
    private Long id;
    private String name;
    private String Submissiondate;
    private String Description;
    private String Eventtype;
    private String Eventdate;
    private String Headcount;

}