package com.core.online_shopping.entity.product;

import com.core.online_shopping.entity.BaseEntity;
import com.core.online_shopping.entity.store.StoreEntity;
import com.core.online_shopping.entity.user.UserEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class ProductEntity extends BaseEntity {
    private UserEntity user;
    private StoreEntity store;
    private String title;
    private String shortDesc;
    private String thumbnail;
    private double price;
    private String slug;
}
