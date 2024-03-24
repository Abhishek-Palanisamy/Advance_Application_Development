package com.abhishek.giftcraft.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserBillingDto {
     private int id;
        private String name;
        private int invoiceno;
        private String address;
        private int quantity;
        private float bill;
        private String mobileno;
}
