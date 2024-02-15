package com.event.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.event.event.entity.Enqentity;
import java.util.List; // Import statement for List

@Repository
public interface Enqrepo extends JpaRepository<Enqentity, Long> {
    Enqentity findByName(String name);
    void deleteServiceBybookId(Long bookId);
    void deleteBybookId(Long bookId);
    Enqentity findById(long userid);

    @Query(value = "select * from bookevents where userid=:s", nativeQuery = true)
    public List<Enqentity> getchefid(@Param("s") long userid);
}
