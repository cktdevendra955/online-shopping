package com.core.online_shopping.controller.user;

import com.core.online_shopping.dto.user.UserDto;
import com.core.online_shopping.repository.user.UserRepo;
import com.core.online_shopping.service.user.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImp implements UserService {

    private UserRepo userRepo;


    @Override
    public List<UserDto> getAll() {
        return List.of();
    }

    @Override
    public UserDto createNewUser(UserDto userDto) {
        return null;
    }

    @Override
    public Void delete_user(UUID id) {
        return null;
    }
}
