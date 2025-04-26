package com.core.backend.service.category;
import com.core.backend.dto.category.CategoryDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CategoryService {


    List<CategoryDto> getAll();
    ResponseEntity<?> create(CategoryDto categoryDto);
    ResponseEntity<?> getById(Long id);
    ResponseEntity<?> updateById(CategoryDto categoryDto,Long id);
    ResponseEntity<?> deleteById(Long id);
}
