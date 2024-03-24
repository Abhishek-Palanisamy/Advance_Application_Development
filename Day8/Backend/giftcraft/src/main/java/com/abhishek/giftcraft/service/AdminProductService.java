package com.abhishek.giftcraft.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abhishek.giftcraft.dto.AdminProductDto;
import com.abhishek.giftcraft.entity.AdminProduct;
import com.abhishek.giftcraft.repository.AdminProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminProductService {
    @Autowired
    private AdminProductRepository adminProductRepository;

    public AdminProduct addAdminProduct(AdminProductDto adminProductDto){
        AdminProduct adminProduct=new AdminProduct();
        adminProduct.setCategory(adminProductDto.getCategory());
        adminProduct.setProductname(adminProductDto.getProductname());
        adminProduct.setPrice(adminProductDto.getPrice());
        adminProduct.setQuantity(adminProductDto.getQuantity());
        adminProductRepository.save(adminProduct);
        return adminProduct;
    }
    public List<AdminProduct> getProducts() {
        return adminProductRepository.findAll();
    }
    public AdminProduct getAdminProduct(int id) {
        return adminProductRepository.findById(id).get();
    }
    public AdminProduct putAdminProduct(int id, AdminProductDto apd) {
        Optional<AdminProduct> checkProduct = adminProductRepository.findById(id);
        if (checkProduct.isPresent()) {
            AdminProduct product = checkProduct.get();
            product.setCategory(apd.getCategory());
            product.setProductname(apd.getProductname());
            product.setPrice(apd.getPrice());
            product.setQuantity(apd.getQuantity());
            return adminProductRepository.save(product);
        } else {
            return null;
        }
    }
    
    
public String delAdminProduct(int id) {
    Optional<AdminProduct> optionalProduct = adminProductRepository.findById(id);
    if (optionalProduct.isPresent()) {
        adminProductRepository.deleteById(id);
        return "Admin deleted the product with ID: " + id;
    } else {
        throw new NoSuchElementException("Product with ID: " + id + " not found");
    }
}

}
