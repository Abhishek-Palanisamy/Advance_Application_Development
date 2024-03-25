package com.example.giftcraft.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class AdminProduct {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String category;
    private String productname;
    private float price;
    private int quantity;

}
