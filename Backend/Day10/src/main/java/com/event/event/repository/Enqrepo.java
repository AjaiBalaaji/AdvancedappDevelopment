package com.event.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.event.entity.Enqentity;

@Repository
public interface Enqrepo extends JpaRepository<Enqentity, Long> {
    Enqentity findByName(String name);
    void deleteServiceByBookId(Long bookid);
    // Other methods...
}