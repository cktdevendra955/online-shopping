package com.core.online_shopping.entity.product;

import com.core.online_shopping.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "os_product_details")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductDetails extends BaseEntity {

    @Column(length = 500)
    private String description;

    @Column(nullable = false)
    private String dimensions;

    @Column(nullable = false)
    private String manufacturer;z

//    @OneToOne
//    @JoinColumn(name = "product_id", nullable = false)
//    private ProductEntity product;

}
