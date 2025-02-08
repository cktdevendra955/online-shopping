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
@Table(name = "store")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class StoreEntity extends BaseEntity {

    private String title;
    private String about;
    private String slug;
    private String active;

    @OneToOne(mappedBy = "store")
    private StoreDetailsEntity storeDetails;

    @OneToOne
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private UserEntity user;
}
