package com.core.online_shopping.dto.user;

import com.core.online_shopping.dto.BaseDto;
import com.core.online_shopping.entity.user.UserAddressEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import org.springframework.beans.BeanUtils;


public class UserAddressDto extends BaseDto {

    private UserDto user;

    private String title;
    private String city;
    private String state;
    private String district;
    private String nearBy;
    private String contact;

    public static UserAddressDto userAddressToUserAddressDto(UserAddressEntity userAddress){
        UserAddressDto userAddressDto = new UserAddressDto();
        BeanUtils.copyProperties(userAddress,userAddressDto);
        return userAddressDto;
    }
}
