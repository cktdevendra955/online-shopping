package com.core.online_shopping.entity.order;

import com.core.online_shopping.entity.BaseEntity;
import com.core.online_shopping.entity.product.ProductEntity;
import com.core.online_shopping.entity.user.UserEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "order")
public class OrderEntity extends BaseEntity {
    private UserEntity user;
    private ProductEntity product;
    private int quantity;

}
