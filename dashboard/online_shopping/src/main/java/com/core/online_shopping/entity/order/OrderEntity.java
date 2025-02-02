package com.core.online_shopping.entity.order;

import com.core.online_shopping.entity.BaseEntity;
import com.core.online_shopping.entity.product.ProductEntity;
import com.core.online_shopping.entity.user.UserEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "os_orders")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class OrderEntity extends BaseEntity {

//    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
//    private UserEntity user;

//    @ManyToOne
//    @JoinColumn(name = "product_id", nullable = false)
//    private ProductEntity product;

    @Column(nullable = false)
    private Integer quantity;

    @Column(nullable = false)
    private Double price;


}
