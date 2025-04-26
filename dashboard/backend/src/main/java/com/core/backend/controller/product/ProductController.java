package com.core.backend.controller.product;



import com.core.backend.dto.product.ProductDto;
import com.core.backend.service.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("product/")
public class ProductController {


    @Autowired
    private ProductService productService;

    @GetMapping
    public List<ProductDto> getAll(){
        return this.productService.getAll();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody ProductDto productDto){
        return this.productService.create(productDto);
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return this.productService.getById(id);
    }


    @PutMapping("{id}")
    public ResponseEntity<?> updateById(@RequestBody ProductDto productDto, @PathVariable Long id){
        return this.productService.updateById(productDto, id);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){
        return this.productService.deleteById(id);
    }


}
