package com.core.online_shopping.repository.user;


import com.core.online_shopping.entity.user.UserEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface UserRepo extends JpaRepository<UserEntity, UUID> {

}
