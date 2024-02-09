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
@Table(name = "bookevent")
public class Enqentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "Submissiondate",nullable = false)
    private String Submissiondate;

    @Column(name = "Description",nullable = false)
    private String Description;

    @Column(name = "Eventtype",nullable = false)
    private String Eventtype;

    @Column(name = "Eventdate",nullable = false)
    private String Eventdate;

    @Column(name = "Headcount",nullable = false)
    private String Headcount;

}