package com.abhishek.giftcraft.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhishek.giftcraft.dto.AdminProductDto;
import com.abhishek.giftcraft.entity.AdminProduct;
import com.abhishek.giftcraft.service.AdminProductService;

@RestController
@RequestMapping("/auth")
public class AdminProductController {
    @Autowired
    private AdminProductService adminProductService;

    @PostMapping("/postadminproduct")
	public AdminProduct postbooking(@RequestBody AdminProductDto apd)
	{
		return adminProductService.addAdminProduct(apd);
	}
      @GetMapping("/allproducts")
    public List<AdminProduct> getAllTheProducts() {
        return adminProductService.getProducts();
    }
    @GetMapping("/getadminproduct/{id}")
    public ResponseEntity<AdminProduct> getProductById(@PathVariable int id) {
        try {
            AdminProduct product = adminProductService.getAdminProduct(id);
            return new ResponseEntity<>(product, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
        @PutMapping("/putadminproduct/{id}")
    public ResponseEntity<AdminProduct> updateProduct(@PathVariable int id, @RequestBody AdminProductDto productDto) {
        AdminProduct updatedProduct = adminProductService.putAdminProduct(id, productDto);
        if (updatedProduct != null) {
            return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
       @DeleteMapping("/deladminproduct/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id) {
        try {
            String message = adminProductService.delAdminProduct(id);
            return new ResponseEntity<>(message, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}
