package com.abhishek.giftcraft.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AdminProductDto {
    private int id;
    private String category;
    private String productname;
    private float price;
    private int quantity;
}
