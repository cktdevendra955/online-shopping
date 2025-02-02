package com.core.online_shopping.service.user;


import com.core.online_shopping.dto.user.UserDto;

import java.util.List;
import java.util.UUID;

public interface UserService {
    List<UserDto> getAll();
    UserDto createNewUser(UserDto userDto);
    Void delete_user(UUID id);
}
