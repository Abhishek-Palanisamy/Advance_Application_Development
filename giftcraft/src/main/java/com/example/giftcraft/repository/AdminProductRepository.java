package com.example.giftcraft.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.giftcraft.entity.AdminProduct;


public interface AdminProductRepository extends JpaRepository<AdminProduct,Integer>{
    @Query("SELECT MAX(p.id) FROM AdminProduct p WHERE p.category = :category")
    Integer findLastProductIdByCategory(String category);

    List<AdminProduct> findByCategory(String category);
    
}
