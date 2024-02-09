package com.event.event.entity;


// import jakarta.persistence.Column;
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
@Table(name = "Addevent")
public class Addevententity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventid;

    // @Column(name = "eventtype",nullable = false)
    private String Eventtype;

    // @Column(name = "description",nullable = false)
    private String Description;

    // @Column(name = "eventpackage",nullable = false)
    private String Eventpackage;

    // @Column(name = "participantscounts",nullable = false)
    private String Participantcount;

    // @Column(name = "charge",nullable = false)
    private int Charge;
}