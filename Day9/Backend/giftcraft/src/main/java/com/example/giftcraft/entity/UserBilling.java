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
public class UserBilling {
       @Id
        @GeneratedValue(strategy=GenerationType.IDENTITY)
        private int id;
        private String name;
        private int invoiceno;
        private String address;
        private int quantity;
        private float bill;
        private String mobileno;
}
