package com.core.online_shopping.entity.store;

import com.core.online_shopping.entity.BaseEntity;
import com.core.online_shopping.entity.user.UserEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "store")
public class StoreEntity extends BaseEntity {
    private UserEntity user;

    private String name;
    private String contact;
    private String owner;
    private String category;
    private String thumbnail;
    private String slug;
}
