package com.core.online_shopping.entity.user.role;

import com.core.online_shopping.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_role")
public class UserRoleEntity extends BaseEntity {
    private String title;
    private String description;
}
