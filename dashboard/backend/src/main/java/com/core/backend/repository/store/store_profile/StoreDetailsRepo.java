package com.core.backend.repository.store.store_profile;

import com.core.backend.entity.store.StoreDetailsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreDetailsRepo extends JpaRepository<StoreDetailsEntity,Long> {
}
