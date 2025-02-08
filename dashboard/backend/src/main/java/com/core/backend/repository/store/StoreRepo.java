package com.core.backend.repository.store;

import com.core.backend.entity.store.StoreEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreRepo extends JpaRepository<StoreEntity,Long> {
}
