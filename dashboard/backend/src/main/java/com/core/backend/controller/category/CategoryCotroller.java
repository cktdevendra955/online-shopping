package com.core.backend.controller.category;

import com.core.backend.dto.category.CategoryDto;
import com.core.backend.service.category.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("category/")
public class CategoryCotroller {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public List<CategoryDto> getAll(){
        return this.categoryService.getAll();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody  CategoryDto categoryDto){
        return this.categoryService.create(categoryDto);
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return this.categoryService.getById(id);
    }


    @PutMapping("{id}")
    public ResponseEntity<?> updateById(@RequestBody CategoryDto categoryDto, @PathVariable Long id){
        return this.categoryService.updateById(categoryDto, id);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){
        return this.categoryService.deleteById(id);
    }


}
