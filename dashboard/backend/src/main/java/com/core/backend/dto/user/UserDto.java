package com.core.backend.dto.user;

import com.core.backend.dto.BaseDto;
import com.core.backend.entity.role.RoleEntity;
import com.core.backend.entity.user.UserProfileEntity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

public class UserDto extends BaseDto {

    private String firstName;
    private String lastName;
    private String emailId;
    private String password;


    private RoleEntity role;
    private UserProfileEntity userProfile;


    private boolean isActive;

    public UserDto() {
    }

    public UserDto(String firstName, String lastName, String emailId, String password, RoleEntity role, UserProfileEntity userProfile, boolean isActive) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.password = password;
        this.role = role;
        this.userProfile = userProfile;
        this.isActive = isActive;
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
