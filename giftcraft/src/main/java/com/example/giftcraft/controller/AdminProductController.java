package com.example.giftcraft.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.giftcraft.dto.AdminProductDto;
import com.example.giftcraft.entity.AdminProduct;
import com.example.giftcraft.service.AdminProductService;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/auth/admin")
public class AdminProductController {

    @Autowired
    private AdminProductService adminProductService;

    @PostMapping("/postadminproduct")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<AdminProduct> postAdminProduct(@RequestBody AdminProductDto adminProductDto) {
        AdminProduct product = adminProductService.addAdminProduct(adminProductDto);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/allproducts")
    public List<AdminProduct> getAllProducts() {
        return adminProductService.getProducts();
    }
    @GetMapping("/getadmincategory/{category}")
    public ResponseEntity<List<AdminProduct>> getProductsByCategory(@PathVariable String category) {
        List<AdminProduct> products = adminProductService.getProductsByCategory(category);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @GetMapping("/getadminproduct/{id}")
    public ResponseEntity<AdminProduct> getAdminProduct(@PathVariable int id) {
        try {
            AdminProduct product = adminProductService.getAdminProduct(id);
            return new ResponseEntity<>(product, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/putadminproduct/{id}")
    public ResponseEntity<AdminProduct> updateAdminProduct(@PathVariable int id, @RequestBody AdminProductDto adminProductDto) {
        AdminProduct updatedProduct = adminProductService.putAdminProduct(id, adminProductDto);
        if (updatedProduct != null) {
            return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deladminproduct/{id}")
    public ResponseEntity<String> deleteAdminProduct(@PathVariable int id) {
        try {
            String message = adminProductService.delAdminProduct(id);
            return new ResponseEntity<>(message, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}
