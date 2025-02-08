package com.core.backend.repository.product;

import com.core.backend.entity.product.ProductManagementEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductManagementRepo extends JpaRepository<ProductManagementEntity,Long> {
}
