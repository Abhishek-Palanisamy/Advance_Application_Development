package com.example.giftcraft.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.giftcraft.dto.UserOrdersDto;
import com.example.giftcraft.entity.UserOrders;
import com.example.giftcraft.service.UserOrdersService;



@RestController
@RequestMapping("/auth")
public class UserOrdersController {
    @Autowired
    private UserOrdersService userOrdersService;
     @PostMapping("/postuserorders")
    public ResponseEntity<UserOrders> addUserOrders(@RequestBody UserOrdersDto userOrdersDto) {
        UserOrders userOrders = userOrdersService.addUserOrders(userOrdersDto);
        return new ResponseEntity<>(userOrders, HttpStatus.CREATED);
    }

    @GetMapping("/alluserorders")
    public ResponseEntity<List<UserOrders>> getAllUserOrders() {
        List<UserOrders> userOrdersList = userOrdersService.getUserOrders();
        return new ResponseEntity<>(userOrdersList, HttpStatus.OK);
    }

    @GetMapping("/getuserorders/{id}")
    public ResponseEntity<UserOrders> getUserOrdersById(@PathVariable int id) {
        UserOrders userOrders = userOrdersService.getUserOrders(id);
        return new ResponseEntity<>(userOrders, HttpStatus.OK);
    }

    @GetMapping("/getuserorders/{username}")
    public ResponseEntity<List<UserOrders>> getOrdersByUsername(@PathVariable String username) {
        List<UserOrders> userOrdersList = userOrdersService.getOrdersByUsername(username);
        return new ResponseEntity<>(userOrdersList, HttpStatus.OK);
    }

    @DeleteMapping("/deluserorders/{id}")
    public ResponseEntity<String> deleteUserOrders(@PathVariable int id) {
        String message = userOrdersService.delUserOrders(id);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
    
}
