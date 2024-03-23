package com.abhishek.giftcraft.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.abhishek.giftcraft.dto.Request.AuthenticationRequest;
import com.abhishek.giftcraft.dto.Request.RegisterRequest;
import com.abhishek.giftcraft.dto.Response.AuthenticationResponse;
import com.abhishek.giftcraft.entity.UserRegister;
import com.abhishek.giftcraft.entity.enumerate.Role;
import com.abhishek.giftcraft.repository.UserRegitserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	@Autowired
    private final UserRegitserRepository repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private final JwtService jwtservice;
	 private final AuthenticationManager authenticationManager;
     public AuthenticationResponse register(RegisterRequest request) {
		// TODO Auto-generated method stub
	
			
	    var user = UserRegister.builder()
	            .username(request.getUsername())
	            .emailid(request.getEmailid())
	            .mobileno(request.getMobileno())
	            .password(passwordEncoder.encode(request.getPassword()))
	            .role(Role.USER)
	            .build();
	    repository.save(user); 
	    var jwtToken = jwtservice.generateToken(user);
	    
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.build();
	}

	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
				request.getUsername(),
				request.getPassword()
				)
				);
				var user = repository.findByUsername(request.getUsername())
						.orElseThrow();
				 var jwtToken = jwtservice.generateToken(user);
				    
					return AuthenticationResponse.builder()
							.token(jwtToken)
							.build();
	}
	
}
