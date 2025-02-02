package com.core.online_shopping.entity.store;

import com.core.online_shopping.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "store_address")
public class StoreAddressEntity extends BaseEntity {
    private StoreEntity store;

    private String city;
    private String state;
    private String address;
}
