package com.event.event.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "bookevents")
public class Enqentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;
    
    @Column(name = "name",nullable = false)
    private String name;
    
    @Column(name = "Description",nullable = false)
    private String description;
    
    @Column(name = "Submissiondate",nullable = false)
    private String submissiondate;
    
    // @Column(name = "UserId",nullable = false)
    private Long userid;

    @Column(name = "Eventtype",nullable = false)
    private String eventtype;

    @Column(name = "Eventdate",nullable = false)
    private String eventdate;

    @Column(name = "BookingStatus",nullable = false)
    private String bookingstatus;

    @Column(name = "Headcount",nullable = false)
    private String headcount;
}