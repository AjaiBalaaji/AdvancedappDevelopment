package com.event.event.mapper;

import com.event.event.dto.Addeventdto;
import com.event.event.entity.Addevententity;

public class Addeventmapper {

    // Assuming Adddto class is correctly defined to align with Addentity
    public static Addeventdto maptoServicedto(Addevententity addentity) {
        // Implement the mapping logic
        return new Addeventdto(
                addentity.getEventid(),
                addentity.getEventtype(),
                addentity.getDescription(),
                addentity.getEventpackage(),
                addentity.getParticipantcount(), // Assuming getParticipantcount returns a String
                addentity.getCharge()
        );
    }

    public static Addevententity maptoServiceentity(Addeventdto adddto) {
        // Implement the mapping logic
        return new Addevententity(
                adddto.getEventid(),
                adddto.getEventtype(),
                adddto.getDescription(),
                adddto.getEventpackage(),
                adddto.getParticipantcount(), // Assuming this is a String as in Addentity
                adddto.getCharge() // Charge is an int, which aligns with Addentity's field
        );
    }
}
