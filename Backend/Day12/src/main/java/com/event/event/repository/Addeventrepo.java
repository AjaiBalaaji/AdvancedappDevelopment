package com.event.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.event.entity.Addevententity;

@Repository
public interface Addeventrepo extends JpaRepository<Addevententity, Long> {
    Addevententity findByEventid(Long Eventid);
    void deleteByEventid(Long Eventid);
   
}