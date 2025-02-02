package com.core.online_shopping.dto.store;

import com.core.online_shopping.dto.BaseDto;
import com.core.online_shopping.dto.user.UserDto;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;


public class StoreDto extends BaseDto {
    private UserDto user;

    private String name;
    private String contact;
    private String owner;
    private String category;
    private String thumbnail;
    private String slug;
}
