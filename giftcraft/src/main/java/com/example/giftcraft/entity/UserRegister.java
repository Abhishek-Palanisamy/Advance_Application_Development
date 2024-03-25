package com.example.giftcraft.entity;


import com.example.giftcraft.entity.enumerate.Role;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "_user")
public class UserRegister  {
      @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userid;
    private String username;
    private String emailid;
    private String password;
    private String mobileno;
    @Enumerated(EnumType.STRING)
    private Role roles;


}
