package com.core.online_shopping.repository.user;

import com.core.online_shopping.entity.user.UserProfileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserProfileRepo extends JpaRepository<UserProfileEntity, UUID> {

}
