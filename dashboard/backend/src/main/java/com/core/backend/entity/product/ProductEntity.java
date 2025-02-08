package com.core.backend.entity.product;

import com.core.backend.entity.BaseEntity;
import com.core.backend.entity.category.CategoryEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "products")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductEntity extends BaseEntity {

    private String title;
    private String short_description;
    private String thumbnail;
    private double sell_price;
    private double buy_price;




}
