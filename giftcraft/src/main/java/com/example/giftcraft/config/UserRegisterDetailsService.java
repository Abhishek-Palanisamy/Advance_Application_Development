package com.example.giftcraft.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.example.giftcraft.entity.UserRegister;
import com.example.giftcraft.repository.UserRegisterRepository;

@Component
public class UserRegisterDetailsService implements UserDetailsService {
    
    @Autowired
    private UserRegisterRepository userRegisterRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserRegister> userReg = userRegisterRepository.findByUsername(username);
        return userReg.map(UsersDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
    }
}
