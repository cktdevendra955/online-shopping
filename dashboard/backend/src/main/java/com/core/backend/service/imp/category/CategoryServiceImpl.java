package com.core.backend.service.imp.category;

import com.core.backend.dto.category.CategoryDto;

import com.core.backend.dto.category.CategoryUtils;
import com.core.backend.entity.category.CategoryEntity;
import com.core.backend.exception_handling.ResourceNotFundException;

import com.core.backend.repository.category.CategoryRepo;
import com.core.backend.service.category.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepo categoryRepo;

    @Override
    public List<CategoryDto> getAll() {
        List<CategoryEntity> list = this.categoryRepo.findAll();
        List<CategoryDto> categories = list.stream().map(data -> CategoryUtils.ENTITY_TO_DTO(data)).collect(Collectors.toList());
        return categories;
    }

    @Override
    public ResponseEntity<?> create(CategoryDto categoryDto) {
        try{
            CategoryEntity categoryEntity = CategoryUtils.DTO_TO_ENTITY(categoryDto);
            categoryEntity.setCreatedAt(new Date());
            CategoryEntity saved = this.categoryRepo.save(categoryEntity);
            return new ResponseEntity<CategoryDto>(CategoryUtils.ENTITY_TO_DTO(saved),HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(Map.of("Message",e.getMessage()),HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> getById(Long id) {
        CategoryEntity categoryEntity = this.categoryRepo.findById(id).orElseThrow(()-> new ResourceNotFundException("Category", "ID ",id));
        return new ResponseEntity<>(CategoryUtils.ENTITY_TO_DTO(categoryEntity),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> updateById(CategoryDto categoryDto, Long id) {
        Optional<CategoryEntity> data = this.categoryRepo.findById(id);
        if (data.isPresent()){
            try{
                CategoryEntity categoryEntity = data.get();
                categoryEntity.setTitle(categoryDto.getTitle());
                categoryEntity.setDescription(categoryDto.getDescription());
                categoryEntity.setSlug(categoryDto.getSlug());
                categoryEntity.setActive(categoryDto.isActive());
                categoryEntity.setUpdatedAt(new Date());
                CategoryEntity saved = this.categoryRepo.save(categoryEntity);
                return new ResponseEntity<CategoryDto>(CategoryUtils.ENTITY_TO_DTO(saved),HttpStatus.CREATED);
            } catch (Exception e) {
                return new ResponseEntity<>(Map.of("Message",e.getMessage()),HttpStatus.BAD_REQUEST);
            }
        }else {
            return new ResponseEntity<>(Map.of("Message","'Data Not Found with Id = '+id'"),HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<?> deleteById(Long id) {
        Optional<CategoryEntity> data = this.categoryRepo.findById(id);
        if (data.isPresent()){
            this.categoryRepo.deleteById(id);
            return new ResponseEntity<>(Map.of("Message","'Data Not Found with Id = '+id'"),HttpStatus.OK);
        }else {
            return new ResponseEntity<>(Map.of("Message","'Data Not Found with Id = '+id'"),HttpStatus.NOT_FOUND);
        }
    }
}
