package com.core.backend.mapper.category;

import com.core.backend.dto.category.CategoryDto;
import com.core.backend.entity.category.CategoryEntity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.context.annotation.Bean;


@Mapper(componentModel = "spring")
public interface CategoryMapper {


    CategoryMapper INSTANCE = Mappers.getMapper(CategoryMapper.class);

    CategoryDto ENTITY_TO_DTO(CategoryEntity categoryEntity);
    CategoryEntity DTO_TO_ENTITY(CategoryDto categoryDto);
}
