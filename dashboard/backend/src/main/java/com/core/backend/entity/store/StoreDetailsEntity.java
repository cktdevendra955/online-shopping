package com.core.backend.entity.store;

import com.core.backend.entity.BaseEntity;
import com.core.backend.entity.user.UserEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "store_details")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class StoreDetailsEntity extends BaseEntity {

    private String state;
    private String city;
    private String pinCode;

    @OneToOne
    @JoinColumn(name = "store_id")
    private StoreEntity store;

}
