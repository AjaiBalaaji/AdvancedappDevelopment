// package com.event.event.service;

// import com.event.event.dto.Enqdto;
// import com.event.event.entity.Enqentity;
// import com.event.event.mapper.Enqmapper;
// import com.event.event.repository.Enqrepo;

// import jakarta.persistence.EntityNotFoundException;
// import jakarta.transaction.Transactional;

// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.stream.Collectors;

// @Service
// public class Enqservice {

//     private final Enqrepo enqrepo;

//     public Enqservice(Enqrepo enqrepo) {
//         this.enqrepo = enqrepo;
//     }

//     public List<Enqdto> getAllServices() {
//         List<Enqentity> services = enqrepo.findAll();
//         return services.stream()
//                 .map(Enqmapper::maptoServicedto)
//                 .collect(Collectors.toList());
//     }

//     public Enqdto getServiceByBookId(Long bookid) {
//         Enqentity enqentity = enqrepo.findById(bookid)
//                 .orElseThrow(() -> new EntityNotFoundException("Service not found with bookid: " + bookid));
//         return Enqmapper.maptoServicedto(enqentity);
//     }

//     public Enqdto createService(Enqdto servicedto) {
//         Enqentity enqentity = Enqmapper.maptoServiceentity(servicedto);
//         enqentity = enqrepo.save(enqentity);
//         return Enqmapper.maptoServicedto(enqentity);
//     }

//     public Enqdto updateServiceByName(String name, Enqdto updatedServicedto) {
//     Enqentity existingService = enqrepo.findByName(name);

//     if (existingService != null) {
//         // Assuming you have setters for these fields in your Enqentity class
//         // Update the fields based on the provided DTO
//         existingService.setName(updatedServicedto.getName());
//         existingService.setSubmissiondate(updatedServicedto.getSubmissiondate());
//         existingService.setDescription(updatedServicedto.getDescription());
//         existingService.setEventtype(updatedServicedto.getEventtype());
//         existingService.setEventdate(updatedServicedto.getEventdate());
//         existingService.setHeadcount(updatedServicedto.getHeadcount());
        
//         existingService = enqrepo.save(existingService);
//         return Enqmapper.maptoServicedto(existingService);
//     } else {
//         // Handle not found scenario
//         throw new EntityNotFoundException("Service not found with name: " + name);
//     }
// }

// public void deleteServiceByBookId(Long bookid) {
//     enqrepo.deleteById(bookid);
//   }
// }


package com.event.event.service;

import com.event.event.dto.Enqdto;
import com.event.event.entity.Enqentity;
import com.event.event.mapper.Enqmapper;
import com.event.event.repository.Enqrepo;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Enqservice {

    private final Enqrepo enqrepo;

    public Enqservice(Enqrepo enqrepo) {
        this.enqrepo = enqrepo;
    }

    public List<Enqdto> getAllServices() {
        List<Enqentity> services = enqrepo.findAll();
        return services.stream()
                .map(Enqmapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Enqdto getServiceByBookId(Long bookid) {
        Enqentity enqentity = enqrepo.findById(bookid)
                .orElseThrow(() -> new EntityNotFoundException("Service not found with bookid: " + bookid));
        return Enqmapper.maptoServicedto(enqentity);
    }

    public Enqdto createService(Enqdto servicedto) {
        Enqentity enqentity = Enqmapper.maptoServiceentity(servicedto);
        enqentity = enqrepo.save(enqentity);
        return Enqmapper.maptoServicedto(enqentity);
    }

    // Newly added method to update a service by bookid
    public Enqdto updateServiceByBookId(Long bookid, Enqdto updatedServicedto) {
        Enqentity existingService = enqrepo.findById(bookid)
                .orElseThrow(() -> new EntityNotFoundException("Service not found with bookid: " + bookid));

        // Assuming setters are defined for all fields in Enqentity
        existingService.setName(updatedServicedto.getName());
        existingService.setSubmissiondate(updatedServicedto.getSubmissiondate());
        existingService.setDescription(updatedServicedto.getDescription());
        existingService.setEventtype(updatedServicedto.getEventtype());
        existingService.setEventdate(updatedServicedto.getEventdate());
        existingService.setHeadcount(updatedServicedto.getHeadcount());

        existingService = enqrepo.save(existingService);
        return Enqmapper.maptoServicedto(existingService);
    }

    public void deleteServiceByBookId(Long bookid) {
        enqrepo.deleteById(bookid);
    }
}
