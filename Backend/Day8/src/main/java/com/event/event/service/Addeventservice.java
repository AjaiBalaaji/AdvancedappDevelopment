package com.event.event.service;

import com.event.event.dto.Addeventdto;
import com.event.event.entity.Addevententity;
import com.event.event.mapper.Addeventmapper;
import com.event.event.repository.Addeventrepo;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Addeventservice {

    private final Addeventrepo addrepo;

    public Addeventservice(Addeventrepo addrepo) {
        this.addrepo = addrepo;
    }

    public List<Addeventdto> getAllServices() {
        List<Addevententity> services = addrepo.findAll();
        return services.stream()
                .map(Addeventmapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Addeventdto getServiceByEventId(Long eventid) {
        Addevententity addentity = addrepo.findById(eventid)
                .orElseThrow(() -> new EntityNotFoundException("Service not found for event ID: " + eventid));
        return Addeventmapper.maptoServicedto(addentity);
    }

    public Addeventdto createService(Addeventdto servicedto) {
        Addevententity addentity = Addeventmapper.maptoServiceentity(servicedto);
        addentity = addrepo.save(addentity);
        return Addeventmapper.maptoServicedto(addentity);
    }

    @Transactional
    public Addeventdto updateServiceByEventId(Long eventid, Addeventdto updatedServicedto) {
        Addevententity existingService = addrepo.findById(eventid)
                .orElseThrow(() -> new EntityNotFoundException("Service not found for event ID: " + eventid));
        existingService.setEventtype(updatedServicedto.getEventtype());
        existingService.setDescription(updatedServicedto.getDescription());
        existingService.setEventpackage(updatedServicedto.getEventpackage());
        existingService.setParticipantcount(updatedServicedto.getParticipantcount());
        existingService.setCharge(updatedServicedto.getCharge());

        existingService = addrepo.save(existingService);
        return Addeventmapper.maptoServicedto(existingService);
    }

    @Transactional
    public void deleteServiceByEventId(Long eventid) {
        if (!addrepo.existsById(eventid)) {
            throw new EntityNotFoundException("Service not found for event ID: " + eventid);
        }
        addrepo.deleteById(eventid);
    }
}
