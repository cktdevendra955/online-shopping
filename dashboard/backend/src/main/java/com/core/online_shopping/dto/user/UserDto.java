package com.core.online_shopping.dto.user;

import com.core.online_shopping.dto.BaseDto;
import com.core.online_shopping.dto.user.role.UserRoleDto;
import com.core.online_shopping.entity.user.UserEntity;
import org.springframework.beans.BeanUtils;


public class UserDto extends BaseDto {
    private UserRoleDto role;

    private String name;
    private String email;
    private String passsword;


    public static UserEntity userDtoToUser(UserDto userDto){
        UserEntity userEntity = new UserEntity();
        BeanUtils.copyProperties(userDto,userEntity);
        return userEntity;
    }

    public static UserDto userToUserDto(UserEntity userEntity){
        UserDto userDto = new UserDto();
        BeanUtils.copyProperties(userEntity,userDto);
        return userDto;
    }


}
