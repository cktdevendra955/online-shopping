package com.core.backend.service.product;


import com.core.backend.dto.product.ProductDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ProductService {


    List<ProductDto> getAll();
    ResponseEntity<?> create(ProductDto productDto);
    ResponseEntity<?> getById(Long id);
    ResponseEntity<?> updateById(ProductDto productDto,Long id);
    ResponseEntity<?> deleteById(Long id);
}
