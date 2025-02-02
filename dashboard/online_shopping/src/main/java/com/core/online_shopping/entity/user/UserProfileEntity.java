package com.core.online_shopping.entity.user;

import com.core.online_shopping.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "os_user_profile")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserProfileEntity extends BaseEntity {

//    private UserEntity user;

    private String gender;
    private String city;
    private String state;
    private String profile_picture_url;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private UserEntity user;
}
