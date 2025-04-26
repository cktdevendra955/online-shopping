package com.core.backend.dto.venders;


import com.core.backend.entity.venders.VenderEntity;
import org.springframework.beans.BeanUtils;

public class VenderUtils {

    public static VenderEntity DTO_TO_ENTITY(VenderDto venderDto){
        VenderEntity venderEntity = new VenderEntity();
        BeanUtils.copyProperties(venderDto,venderEntity);
        return venderEntity;
    }

    public static VenderDto ENTITY_TO_DTO(VenderEntity venderEntity){
        VenderDto venderDto = new VenderDto();
        BeanUtils.copyProperties(venderEntity,venderDto);
        return venderDto;
    }
}
