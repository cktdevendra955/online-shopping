package com.core.online_shopping.entity.user;

import com.core.online_shopping.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_address")
public class UserAddressEntity extends BaseEntity {
    private UserEntity user;

    private String title;
    private String city;
    private String state;
    private String district;
    private String nearBy;
    private String contact;
}
