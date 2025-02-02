package com.core.online_shopping.dto.product;

import com.core.online_shopping.dto.BaseDto;
import com.core.online_shopping.dto.store.StoreDto;
import com.core.online_shopping.dto.user.UserDto;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

public class ProductDto extends BaseDto {
    private UserDto user;
    private StoreDto store;
    private String title;
    private String shortDesc;
    private String thumbnail;
    private double price;
    private String slug;
}
