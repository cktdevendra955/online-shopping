package com.core.backend.dto.product;


import com.core.backend.entity.product.ProductEntity;
import org.springframework.beans.BeanUtils;

public class ProductUtils {

    public static ProductEntity DTO_TO_ENTITY(ProductDto productDto){
        ProductEntity productEntity = new ProductEntity();
        BeanUtils.copyProperties(productDto,productEntity);
        return productEntity;
    }

    public static ProductDto ENTITY_TO_DTO(ProductEntity productEntity){
        ProductDto productDto = new ProductDto();
        BeanUtils.copyProperties(productEntity,productDto);
        return productDto;
    }
}
