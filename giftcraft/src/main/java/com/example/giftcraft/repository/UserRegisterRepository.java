package com.example.giftcraft.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.giftcraft.entity.UserRegister;

public interface UserRegisterRepository extends JpaRepository<UserRegister,Long>{
	Optional<UserRegister>findByUsername(String username);
}
