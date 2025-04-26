package com.core.backend.dto.category;

import com.core.backend.dto.store.StoreDto;
import com.core.backend.entity.category.CategoryEntity;
import com.core.backend.entity.store.StoreEntity;
import org.springframework.beans.BeanUtils;

public class CategoryUtils {

    public static CategoryEntity DTO_TO_ENTITY(CategoryDto categoryDto){
        CategoryEntity categoryEntity = new CategoryEntity();
        BeanUtils.copyProperties(categoryDto,categoryEntity);
        return categoryEntity;
    }

    public static CategoryDto ENTITY_TO_DTO(CategoryEntity categoryEntity){
        CategoryDto categoryDto = new CategoryDto();
        BeanUtils.copyProperties(categoryEntity,categoryDto);
        return categoryDto;
    }
}
