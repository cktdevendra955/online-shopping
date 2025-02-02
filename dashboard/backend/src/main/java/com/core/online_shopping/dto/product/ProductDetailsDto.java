package com.core.online_shopping.dto.product;

import com.core.online_shopping.dto.BaseDto;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

public class ProductDetailsDto extends BaseDto {
    private ProductDto product;

    private String full_description;
    private String images;
}
