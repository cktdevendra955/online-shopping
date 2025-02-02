package com.core.online_shopping.entity.cart;

import com.core.online_shopping.entity.BaseEntity;
import com.core.online_shopping.entity.product.ProductEntity;
import com.core.online_shopping.entity.user.UserEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "os_cart")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CartEntity extends BaseEntity {

//    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
//    private UserEntity user;  // Assuming you have a User entity that represents the customer
//
//
//    @ManyToOne
//    @JoinColumn(name = "product_id", nullable = false)
//    private ProductEntity product;

    @Column(nullable = false)
    private Integer quantity;

    @Column(nullable = false)
    private Double price;

}
