package com.core.backend.dto.user;

import com.core.backend.dto.role.RoleDto;
import com.core.backend.entity.role.RoleEntity;
import com.core.backend.entity.user.UserEntity;
import org.springframework.beans.BeanUtils;

public class UserUtils {

    public static UserEntity DTO_TO_ENTITY(UserDto userDto){
        UserEntity userEntity = new UserEntity();
        BeanUtils.copyProperties(userDto,userEntity);
        return userEntity;
    }

    public static UserDto ENTITY_TO_DTO(UserEntity userEntity){
        UserDto userDto = new UserDto();
        BeanUtils.copyProperties(userEntity,userDto);
        return userDto;
    }
}
