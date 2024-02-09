package com.event.event.mapper;

import com.event.event.dto.Enqdto;
import com.event.event.entity.Enqentity;

public class Enqmapper {

    public static Enqdto maptoServicedto(Enqentity enqentity) {
        // Implement the mapping logic
        return new Enqdto(
                enqentity.getBookId(),
                enqentity.getName(),
                enqentity.getSubmissiondate(),
                enqentity.getDescription(),
                enqentity.getEventtype(),
                enqentity.getEventdate(),
                enqentity.getHeadcount()
                
        );
    }

    public static Enqentity maptoServiceentity(Enqdto enqdto) {
        Enqentity enqentity = new Enqentity();
        enqentity.setBookId(enqdto.getId());
        enqentity.setName(enqdto.getName());
        enqentity.setSubmissiondate(enqdto.getSubmissiondate());
        enqentity.setDescription(enqdto.getDescription());
        enqentity.setEventtype(enqdto.getEventtype());
        enqentity.setEventdate(enqdto.getEventdate());
        enqentity.setHeadcount(enqdto.getHeadcount());
        return enqentity;
    }
}