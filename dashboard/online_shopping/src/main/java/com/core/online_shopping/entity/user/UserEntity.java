package com.core.online_shopping.entity.user;


import com.core.online_shopping.entity.BaseEntity;
import com.core.online_shopping.entity.cart.CartEntity;
import com.core.online_shopping.entity.order.OrderEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "os_users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserEntity extends BaseEntity {

    private String name;
    private String email;
    private String password;
    private String slug;

    @OneToOne(mappedBy = "user")
    private UserProfileEntity userProfile;


//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
//    private Set<CartEntity> carts;
//
//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
//    private Set<OrderEntity> orders;

}
