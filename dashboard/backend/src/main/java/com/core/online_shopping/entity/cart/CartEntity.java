package com.core.online_shopping.entity.cart;

import com.core.online_shopping.entity.BaseEntity;
import com.core.online_shopping.entity.product.ProductEntity;
import com.core.online_shopping.entity.user.UserEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "cart")
public class CartEntity extends BaseEntity {
    private UserEntity user;
    private ProductEntity product;
    private int quantity;
}
