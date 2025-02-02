package com.core.online_shopping.entity.product;

import com.core.online_shopping.entity.BaseEntity;
import com.core.online_shopping.entity.store.StoreEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "product_description")
public class ProductDetailsEntity extends BaseEntity {
    private ProductEntity product;

    private String full_description;
    private String images;
}
