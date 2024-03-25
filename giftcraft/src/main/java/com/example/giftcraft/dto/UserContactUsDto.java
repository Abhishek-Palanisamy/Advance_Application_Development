package com.example.giftcraft.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserContactUsDto {
    	private int id;
	private String firstname;
	private String emailid;
	private Long mobile;
	private String subject;
	private String query;
}
