package com.abhishek.giftcraft.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhishek.giftcraft.dto.Request.AuthenticationRequest;
import com.abhishek.giftcraft.dto.Request.RegisterRequest;
import com.abhishek.giftcraft.dto.Response.AuthenticationResponse;
import com.abhishek.giftcraft.entity.UserRegister;
import com.abhishek.giftcraft.repository.UserRegitserRepository;
import com.abhishek.giftcraft.service.AuthenticationService;
import java.util.List;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")	
@RequiredArgsConstructor
public class AuthenticationController {
    @Autowired
	private UserRegitserRepository userrepo;
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
		return userrepo.findAll();
		
	}

		  @PostMapping("/authentication")
		  public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request)
		  {
			return ResponseEntity.ok(service.authenticate(request));
			  
		  }
}
