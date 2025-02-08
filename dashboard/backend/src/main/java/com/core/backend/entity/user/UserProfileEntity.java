package com.core.backend.entity.user;

import com.core.backend.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "user_profile")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserProfileEntity extends BaseEntity {

    private String profile_picture_url;
    private String gender;

    @OneToOne
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private UserEntity user;

}
