package com.core.online_shopping.dto.user;

import com.core.online_shopping.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserProfileDto extends BaseEntity {

    private UserDto user;

    private String gender;
    private String city;
    private String state;
    private String profile_picture_url;
}
