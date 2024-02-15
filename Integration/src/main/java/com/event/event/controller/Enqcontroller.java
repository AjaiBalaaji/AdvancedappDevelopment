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
import com.event.event.entity.Enqentity;
import com.event.event.service.Enqservice;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookevent")
@CrossOrigin("*")
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
    // @GetMapping("/{bookId}")
    // public ResponseEntity<Enqdto> getServiceByBookId(@PathVariable Long bookId) {
    //     Enqdto service = enqservice.getServiceByBookId(bookId); // Assuming the method is updated to use bookid
    //     if (service != null) {
    //         return new ResponseEntity<>(service, HttpStatus.OK);
    //     } else {
    //         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    //     }
    // }
    @GetMapping("/{userid}")
    public List<Enqentity> getmovie(@PathVariable("userid") long userid) {
       return enqservice.getfood(userid);
    }

    @PostMapping("/book")
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
    @PutMapping("/update/{bookId}")
    public ResponseEntity<Enqdto> updateStatusById(@PathVariable long bookId, @RequestBody String status) {
    Enqdto updatedServiceDto = enqservice.updateStatusById(bookId, status);
    if (updatedServiceDto != null) {
        return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
    @DeleteMapping("/{bookId}")
    public ResponseEntity<Void> deleteServiceByBookId(@PathVariable String bookId) {
        // Convert eventid from String to Long
        Long eventIdLong;
        try {
            eventIdLong = Long.parseLong(bookId);
        } catch (NumberFormatException e) {
            // If the conversion fails, respond with a 400 Bad Request
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {
            enqservice.deleteServiceByBookId(eventIdLong);
            // If deletion is successful, respond with a 204 No Content
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (EntityNotFoundException e) {
            // If the service to delete is not found, respond with a 404 Not Found
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Modify to use bookid
    // @DeleteMapping("/{bookId}")
    // public ResponseEntity<Void> deleteServiceByBookId(@PathVariable Long bookId) {
    //     enqservice.deleteServiceByBookId(bookId); // Assuming the method is updated to use bookId
    //     return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    // }

}