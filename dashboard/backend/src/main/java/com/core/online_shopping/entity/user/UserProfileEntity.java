package com.core.online_shopping.entity.user;

import com.core.online_shopping.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_profile")
public class UserProfileEntity extends BaseEntity {
    private  UserEntity user;

    private String gender;
    private String profile_picture;
    private String city;
    private String contact_number;
}
