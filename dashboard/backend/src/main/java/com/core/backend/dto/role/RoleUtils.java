package com.core.backend.dto.role;

import com.core.backend.entity.role.RoleEntity;
import org.springframework.beans.BeanUtils;

public class RoleUtils {


    public static RoleEntity DTO_TO_ENTITY(RoleDto roleDto){
        RoleEntity roleEntity = new RoleEntity();
        BeanUtils.copyProperties(roleDto,roleEntity);
        return roleEntity;
    }

    public static RoleDto ENTITY_TO_DTO(RoleEntity roleEntity){
        RoleDto roleDto = new RoleDto();
        BeanUtils.copyProperties(roleEntity,roleDto);
        return roleDto;
    }
}
