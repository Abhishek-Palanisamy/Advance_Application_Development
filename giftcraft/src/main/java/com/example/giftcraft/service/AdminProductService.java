package com.example.giftcraft.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.giftcraft.dto.AdminProductDto;
import com.example.giftcraft.entity.AdminProduct;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class AdminProductService {

    @Autowired
    private com.example.giftcraft.repository.AdminProductRepository adminProductRepository;

    public AdminProduct addAdminProduct(AdminProductDto adminProductDto) {
        AdminProduct adminProduct = new AdminProduct();
        adminProduct.setCategory(adminProductDto.getCategory());
        adminProduct.setProductname(adminProductDto.getProductname());
        adminProduct.setPrice(adminProductDto.getPrice());
        adminProduct.setQuantity(adminProductDto.getQuantity());

        int nextId = getNextProductId(adminProductDto.getCategory());
        adminProduct.setId(nextId);

        adminProductRepository.save(adminProduct);
        return adminProduct;
    }

    private int getNextProductId(String category) {
        Integer lastProductId = adminProductRepository.findLastProductIdByCategory(category);
        if (lastProductId == null) {
            return 1;
        }
        return lastProductId + 1;
    }

    public List<AdminProduct> getProducts() {
        return adminProductRepository.findAll();
    }

    public AdminProduct getAdminProduct(int id) {
        return adminProductRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Product with ID: " + id + " not found"));
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
    public List<AdminProduct> getProductsByCategory(String category) {
        return adminProductRepository.findByCategory(category);
    }
    }

