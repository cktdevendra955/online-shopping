package com.core.backend.entity.user;

import com.core.backend.entity.BaseEntity;
import com.core.backend.entity.role.RoleEntity;
import com.core.backend.entity.store.StoreEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class UserEntity  extends BaseEntity {
    private String firstName;
    private String lastName;
    private String emailId;
    private String password;
    private boolean isActive;

    @OneToOne
    @JoinColumn(name = "role_id",referencedColumnName = "id")
    private RoleEntity role;

    @OneToOne(mappedBy = "user")
    private UserProfileEntity userProfile;

    @OneToOne(mappedBy = "user")
    private StoreEntity store;

    public UserEntity() {
    }

    public UserEntity(String firstName, String lastName, String emailId, String password, boolean isActive, RoleEntity role, UserProfileEntity userProfile) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.password = password;
        this.isActive = isActive;
        this.role = role;
        this.userProfile = userProfile;
    }

    public RoleEntity getRole() {
        return role;
    }

    public void setRole(RoleEntity role) {
        this.role = role;
    }

    public UserProfileEntity getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfileEntity userProfile) {
        this.userProfile = userProfile;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
