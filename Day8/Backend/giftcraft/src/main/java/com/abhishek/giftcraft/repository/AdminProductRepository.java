package com.abhishek.giftcraft.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.giftcraft.entity.AdminProduct;

public interface AdminProductRepository extends JpaRepository<AdminProduct,Integer>{
    
}
