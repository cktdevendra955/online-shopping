package com.core.online_shopping.repository.product;
import com.core.online_shopping.entity.product.ProductDetailsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface ProductDetailsRepo extends JpaRepository<ProductDetailsEntity, UUID> {

}
