package com.core.online_shopping.entity.product;

import com.core.online_shopping.entity.BaseEntity;
import com.core.online_shopping.entity.product.category.CategoryEntity;
import com.core.online_shopping.entity.store.StoreEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "os_products")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductEntity extends BaseEntity {

    @Column(nullable = false)
    private String name;


    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private Integer stockQuantity;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private CategoryEntity category;

//    @ManyToOne
//    @JoinColumn(name = "category_id", nullable = false)
//    private CategoryEntity category;
//
//    @OneToOne(mappedBy = "product", cascade = CascadeType.ALL)
//    private ProductDetails productDetails;
//
//    @ManyToOne
//    @JoinColumn(name = "store_id", nullable = false)
//    private StoreEntity store;

}
