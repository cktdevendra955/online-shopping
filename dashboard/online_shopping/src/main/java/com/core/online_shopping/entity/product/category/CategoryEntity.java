package com.core.online_shopping.entity.product.category;

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
@Table(name = "os_categories")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CategoryEntity extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "category", cascade = CascadeType.ALL)
    private List<ProductEntity> products;




//    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
//    private Set<ProductEntity> products;
}
