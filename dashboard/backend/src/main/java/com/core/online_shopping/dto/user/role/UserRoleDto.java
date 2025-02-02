package com.core.online_shopping.dto.user.role;

import com.core.online_shopping.dto.BaseDto;
import com.core.online_shopping.dto.user.UserDto;
import com.core.online_shopping.entity.user.UserEntity;
import com.core.online_shopping.entity.user.role.UserRoleEntity;
import org.springframework.beans.BeanUtils;


public class UserRoleDto extends BaseDto {
    private String title;
    private String description;


    public static UserRoleEntity userRoleDtoToUserRole(UserRoleDto userRoleDto){
        UserRoleEntity userRole = new UserRoleEntity();
        BeanUtils.copyProperties(userRoleDto,userRole);
        return userRole;
    }

    public static UserRoleDto userRoleToUserRoleDto(UserRoleEntity userRoleEntity){
        UserRoleDto userRoleDto = new UserRoleDto();
        BeanUtils.copyProperties(userRoleEntity,userRoleDto);
        return userRoleDto;
    }
}
