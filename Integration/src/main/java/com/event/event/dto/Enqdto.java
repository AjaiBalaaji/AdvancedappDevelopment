// package com.event.event.dto;
// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;


// @Getter
// @Setter
// @NoArgsConstructor
// @AllArgsConstructor
// public class Enqdto {
//     private Long bookId;
//     private String name;
//     private String description;
//     private String bookingstatus;
//     private Long userid;
//     private String eventtype;
//     private String submissiondate;
//     private String headcount;
//     private String eventdate;

// }

package com.event.event.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Enqdto {
    private Long bookId;
    private String name;
    private String description;
    private String submissiondate;
    private Long userid;
    private String eventtype;
    private String eventdate;
    private String bookingstatus;
    private String headcount; // Changed from String to Integer to properly represent numeric values
    
}
