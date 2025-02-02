package com.core.online_shopping.dto.user;

import com.core.online_shopping.dto.BaseDto;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;


public class UserProfileDto extends BaseDto {
    private UserDto user;

    private String gender;
    private String profile_picture;
    private String city;
    private String contact_number;
}
