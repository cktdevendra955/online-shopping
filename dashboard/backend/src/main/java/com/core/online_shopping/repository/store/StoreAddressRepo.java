package com.core.online_shopping.repository.store;
import com.core.online_shopping.entity.store.StoreAddressEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface StoreAddressRepo extends JpaRepository<StoreAddressEntity, UUID> {

}
