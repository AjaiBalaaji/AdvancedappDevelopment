package com.event.event.controller;

import com.event.event.dto.Addeventdto;
import com.event.event.service.Addeventservice;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.EntityNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/addevent")
@CrossOrigin(origins="*")
public class Addeventcontroller {

    private final Addeventservice addservice;

    public Addeventcontroller(Addeventservice addservice) {
        this.addservice = addservice;
    }

    @Tag(name="GetAllEvents",description="Getting all events")
    @GetMapping("/showallevents")
    public ResponseEntity<List<Addeventdto>> getAllServices() {
        List<Addeventdto> services = addservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }
    // Use eventid instead of coursename
    @Tag(name="GetEvents",description="Getting events using eventId")
    @GetMapping("/{eventid}")
    public ResponseEntity<Addeventdto> getServiceByEventId(@PathVariable String eventid) {
        // Convert eventid from String to Long
        Long eventIdLong;
        try {
            eventIdLong = Long.parseLong(eventid);
        } catch (NumberFormatException e) {
            // If the conversion fails, respond with a 400 Bad Request
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {
            Addeventdto service = addservice.getServiceByEventId(eventIdLong);
            return new ResponseEntity<>(service, HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            // If the service is not found, respond with a 404 Not Found
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Tag(name="Addnewevents",description="Adding new events")
    @PostMapping("/newevent")
    public ResponseEntity<Addeventdto> createService(@RequestBody Addeventdto service) {
        Addeventdto createdService = addservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    // Use eventid instead of coursename
    @Tag(name="Update",description="Update event using eventid")
    @PutMapping("/{eventid}")
    public ResponseEntity<Addeventdto> updateServiceByEventId(@PathVariable String eventid, @RequestBody Addeventdto updatedServiceDto) {
        // Convert eventid from String to Long
        Long eventIdLong;
        try {
            eventIdLong = Long.parseLong(eventid);
        } catch (NumberFormatException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Addeventdto updatedService = addservice.updateServiceByEventId(eventIdLong, updatedServiceDto);
        if (updatedService != null) {
            return new ResponseEntity<>(updatedService, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Use eventid instead of coursename
    @Tag(name="Delete",description="Delete event using eventid")
    @DeleteMapping("/{eventid}")
    public ResponseEntity<Void> deleteServiceByEventId(@PathVariable String eventid) {
        // Convert eventid from String to Long
        Long eventIdLong;
        try {
            eventIdLong = Long.parseLong(eventid);
        } catch (NumberFormatException e) {
            // If the conversion fails, respond with a 400 Bad Request
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {
            addservice.deleteServiceByEventId(eventIdLong);
            // If deletion is successful, respond with a 204 No Content
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (EntityNotFoundException e) {
            // If the service to delete is not found, respond with a 404 Not Found
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
