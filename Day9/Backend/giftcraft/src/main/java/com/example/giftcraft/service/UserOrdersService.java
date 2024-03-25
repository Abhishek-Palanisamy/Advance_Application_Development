package com.example.giftcraft.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.giftcraft.dto.UserOrdersDto;
import com.example.giftcraft.entity.UserOrders;
import com.example.giftcraft.repository.UserOrdersRepository;


@Service
public class UserOrdersService {
    @Autowired
    private UserOrdersRepository userOrdersRepository;

    public UserOrders addUserOrders(UserOrdersDto userOrdersDto){
        UserOrders userOrders=new UserOrders();
        userOrders.setProductname(userOrdersDto.getProductname());
        userOrders.setUsername(userOrdersDto.getUsername());
        userOrders.setQuantity(userOrdersDto.getQuantity());
        userOrders.setTotalbill(userOrdersDto.getTotalbill());
        userOrdersRepository.save(userOrders);
        return userOrders;
    }
    public List<UserOrders> getOrdersByUsername(String username) {
        return userOrdersRepository.findByUsername(username);
    }
        public List<UserOrders> getUserOrders() {
        return userOrdersRepository.findAll();
    }

    public UserOrders getUserOrders(int id) {
        return userOrdersRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Product with ID: " + id + " not found"));
    }
        public String delUserOrders(int id) {
        Optional<UserOrders> optionalOrders = userOrdersRepository.findById(id);
        if (optionalOrders.isPresent()) {
            userOrdersRepository.deleteById(id);
            return "Admin deleted the product with ID: " + id;
        } else {
            throw new NoSuchElementException("Product with ID: " + id + " not found");
        }
    }

    
}
