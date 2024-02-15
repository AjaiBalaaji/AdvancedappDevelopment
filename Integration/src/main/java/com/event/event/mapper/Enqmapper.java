package com.event.event.mapper;

import com.event.event.dto.Enqdto;
import com.event.event.entity.Enqentity;

public class Enqmapper {

    // public static Enqdto maptoServicedto(Enqentity enqentity) {
    //     // Implement the mapping logic
    //     return new Enqdto(
    //             enqentity.getBookId(),
    //             enqentity.getDescription(),
    //             enqentity.getName(),
    //             enqentity.getSubmissiondate(),
    //             enqentity.getUserid(),
    //             enqentity.getEventtype(),
    //             enqentity.getEventdate(),
    //             enqentity.getHeadcount(),
    //             enqentity.getBookingstatus()
                
    //     );
    // }
    public static Enqdto maptoServicedto(Enqentity enqentity) {
        return new Enqdto(
                enqentity.getBookId(),
                enqentity.getName(), // Corrected the order
                enqentity.getDescription(), // Corrected the order
                enqentity.getSubmissiondate(), // Corrected the order
                enqentity.getUserid(),
                enqentity.getEventtype(),
                enqentity.getEventdate(), // Corrected the order
                enqentity.getBookingstatus(), // Corrected the order
                enqentity.getHeadcount()
        );
    }

    public static Enqentity maptoServiceentity(Enqdto enqdto) {
        return new Enqentity(
                enqdto.getBookId(),
                enqdto.getName(),
                enqdto.getDescription(),
                enqdto.getSubmissiondate(),
                enqdto.getUserid(),
                enqdto.getEventtype(),
                enqdto.getEventdate(),
                enqdto.getBookingstatus(),  
                enqdto.getHeadcount()
        );
        // Enqentity enqentity = new Enqentity();
        // enqentity.setBookId(enqdto.getId());
        // enqentity.setUserId(enqdto.getUserId());
        // enqentity.setName(enqdto.getName());
        // enqentity.setSubmissiondate(enqdto.getSubmissiondate());
        // enqentity.setDescription(enqdto.getDescription());
        // enqentity.setEventtype(enqdto.getEventtype());
        // enqentity.setEventdate(enqdto.getEventdate());
        // enqentity.setHeadcount(enqdto.getHeadcount());
        // enqentity.setBookingstatus(enqdto.getBookingstatus());
        // return enqentity;
    }
}