package com.core.online_shopping.repository.store;

import com.core.online_shopping.entity.store.StoreEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreRepo extends JpaRepository<StoreEntity,Long> {
}
