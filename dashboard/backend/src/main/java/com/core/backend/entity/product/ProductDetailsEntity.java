package com.core.backend.entity.product;

import com.core.backend.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "product_details")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductDetailsEntity extends BaseEntity {
    private String full_detail;
    private String images;
}
