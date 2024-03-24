package com.abhishek.giftcraft.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserOrdersDto {
      private int id;
        private String username;
        private String productname;
        private int quantity;
        private float totalbill;
}
