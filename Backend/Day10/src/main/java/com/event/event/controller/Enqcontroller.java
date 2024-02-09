// package com.event.event.controller;

// import com.event.event.dto.Enqdto;
// import com.event.event.service.Enqservice;

// // import io.swagger.v3.oas.annotations.tags.Tag;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/bookevent")

// @CrossOrigin(origins="*")
// public class Enqcontroller {

//     private final Enqservice enqservice;

//     public Enqcontroller(Enqservice enqservice) {
//         this.enqservice = enqservice;
//     }

//     @GetMapping
//     public ResponseEntity<List<Enqdto>> getAllServices() {
//         List<Enqdto> services = enqservice.getAllServices();
//         return new ResponseEntity<>(services, HttpStatus.OK);
//     }


//     @GetMapping("/{name}")
//     public ResponseEntity<Enqdto> getServiceByName(@PathVariable String name) {
//         Enqdto service = enqservice.getServiceByName(name);
//         if (service != null) {
//             return new ResponseEntity<>(service, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     @PostMapping
//     public ResponseEntity<Enqdto> createService(@RequestBody Enqdto service) {
//         Enqdto createdService = enqservice.createService(service);
//         return new ResponseEntity<>(createdService, HttpStatus.CREATED);
//     }

//     @PutMapping("/{name}")
//     public ResponseEntity<Enqdto> updateServiceByName(@PathVariable String name, @RequestBody Enqdto updatedService) {
//         Enqdto updatedServiceDto = enqservice.updateServiceByName(name, updatedService);
//         if (updatedServiceDto != null) {
//             return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     @DeleteMapping("/{name}")
//     public ResponseEntity<Void> deleteServiceByName(@PathVariable String name) {
//         enqservice.deleteServiceByName(name);
//         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//     }
// }


package com.event.event.controller;

import com.event.event.dto.Enqdto;
import com.event.event.service.Enqservice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookevent")

@CrossOrigin(origins="*")
public class Enqcontroller {

    private final Enqservice enqservice;

    public Enqcontroller(Enqservice enqservice) {
        this.enqservice = enqservice;
    }

    @GetMapping
    public ResponseEntity<List<Enqdto>> getAllServices() {
        List<Enqdto> services = enqservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    // Modify to use bookid
    @GetMapping("/{bookid}")
    public ResponseEntity<Enqdto> getServiceByBookId(@PathVariable Long bookid) {
        Enqdto service = enqservice.getServiceByBookId(bookid); // Assuming the method is updated to use bookid
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Enqdto> createService(@RequestBody Enqdto service) {
        Enqdto createdService = enqservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    // Modify to use bookid
    @PutMapping("/{bookid}")
    public ResponseEntity<Enqdto> updateServiceByBookId(@PathVariable Long bookid, @RequestBody Enqdto updatedService) {
        Enqdto updatedServiceDto = enqservice.updateServiceByBookId(bookid, updatedService); // Assuming the method is updated to use bookid
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Modify to use bookid
    @DeleteMapping("/{bookid}")
    public ResponseEntity<Void> deleteServiceByBookId(@PathVariable Long bookid) {
        enqservice.deleteServiceByBookId(bookid); // Assuming the method is updated to use bookid
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
