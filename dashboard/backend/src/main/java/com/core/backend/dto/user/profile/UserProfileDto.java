package com.core.backend.dto.user.profile;

import com.core.backend.dto.BaseDto;
import com.core.backend.entity.user.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserProfileDto extends BaseDto {

    private String profile_picture_url;
    private String gender;

    private UserEntity user;

}
