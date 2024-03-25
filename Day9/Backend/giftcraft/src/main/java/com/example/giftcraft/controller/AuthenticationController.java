package com.example.giftcraft.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.giftcraft.dto.Request.AuthenticationRequest;
import com.example.giftcraft.dto.Request.RegisterRequest;
import com.example.giftcraft.dto.Response.AuthenticationResponse;
import com.example.giftcraft.entity.UserRegister;
import com.example.giftcraft.repository.UserRegisterRepository;
import com.example.giftcraft.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")	
@RequiredArgsConstructor
public class AuthenticationController {
    @Autowired
	private UserRegisterRepository userRegisterRepository;
	private final AuthenticationService service;
	@PostMapping("/register")
	 public ResponseEntity<String> register(
		      @RequestBody RegisterRequest request
		  ) {
		service.register(request);
		    return ResponseEntity.ok("Registered Successfully");
		  }
	@GetMapping("/getregister")
	public List<UserRegister> getregister()
	{
		return userRegisterRepository.findAll();
		
	}

		  @PostMapping("/authentication")
		  public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request)
		  {
			return ResponseEntity.ok(service.authenticate(request));
			  
		  }
    
}
