package com.core.online_shopping.entity.user;

import com.core.online_shopping.entity.BaseEntity;
import com.core.online_shopping.entity.user.role.UserRoleEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class UserEntity extends BaseEntity {
    private UserRoleEntity role;

    private String name;
    private String email;
    private String passsword;


}
