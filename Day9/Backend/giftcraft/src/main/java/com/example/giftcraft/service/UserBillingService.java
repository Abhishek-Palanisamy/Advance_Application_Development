package com.example.giftcraft.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.giftcraft.dto.UserBillingDto;
import com.example.giftcraft.entity.UserBilling;
import com.example.giftcraft.repository.UserBillingepository;


@Service

public class UserBillingService {
    @Autowired
    private UserBillingepository uBillingepository;

    public UserBilling addUserBilling(UserBillingDto userBillingDto){
        UserBilling userBilling=new UserBilling();
        userBilling.setInvoiceno(userBillingDto.getInvoiceno());
        userBilling.setAddress(userBillingDto.getAddress());
        userBilling.setMobileno(userBillingDto.getMobileno());
        userBilling.setQuantity(userBillingDto.getQuantity());
        userBilling.setBill(userBillingDto.getBill());
        uBillingepository.save(userBilling);
        return userBilling;
    }
        public List<UserBilling> getBillings() {
        return uBillingepository.findAll();
    }

    public UserBilling getUserBilling(int id) {
        return uBillingepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Billing with ID: " + id + " not found"));
    }
        public String delUserBilling(int id) {
        Optional<UserBilling> optionalProduct = uBillingepository.findById(id);
        if (optionalProduct.isPresent()) {
            uBillingepository.deleteById(id);
            return "Admin deleted the Billing with ID: " + id;
        } else {
            throw new NoSuchElementException("Billing with ID: " + id + " not found");
        }
    }
    
}
