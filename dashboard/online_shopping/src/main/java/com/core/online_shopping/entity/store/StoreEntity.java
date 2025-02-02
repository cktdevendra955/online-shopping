package com.core.online_shopping.entity.store;

import com.core.online_shopping.entity.BaseEntity;
import com.core.online_shopping.entity.product.ProductEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;


@Entity
@Table(name = "os_store")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class StoreEntity extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String name;
    @Column(nullable = false)
    private String location;


    @OneToMany(fetch = FetchType.LAZY, mappedBy = "store", cascade = CascadeType.ALL)
    private List<ProductEntity> products;

//    @OneToMany(mappedBy = "store", cascade = CascadeType.ALL)
//    private Set<ProductEntity> products;
}
