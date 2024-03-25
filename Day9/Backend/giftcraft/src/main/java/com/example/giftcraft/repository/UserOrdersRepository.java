package com.example.giftcraft.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.giftcraft.entity.UserOrders;


public interface UserOrdersRepository extends JpaRepository<UserOrders,Integer>{
    List<UserOrders> findByUsername(String username);
}
