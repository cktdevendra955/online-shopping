package com.core.online_shopping.repository.user;

import com.core.online_shopping.entity.user.UserProfileEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserProfileRepo extends JpaRepository<UserProfileEntity,Long> {
}
