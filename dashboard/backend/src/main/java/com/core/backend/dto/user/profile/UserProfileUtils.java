package com.core.backend.dto.user.profile;
import com.core.backend.entity.user.UserProfileEntity;
import org.springframework.beans.BeanUtils;

public class UserProfileUtils {

    public static UserProfileEntity DTO_TO_ENTITY(UserProfileDto userProfileDto){
        UserProfileEntity userProfileEntity = new UserProfileEntity();
        BeanUtils.copyProperties(userProfileDto,userProfileEntity);
        return userProfileEntity;
    }

    public static UserProfileDto ENTITY_TO_DTO(UserProfileEntity userProfileEntity){
        UserProfileDto userProfileDto = new UserProfileDto();
        BeanUtils.copyProperties(userProfileEntity,userProfileDto);
        return userProfileDto;
    }
}
