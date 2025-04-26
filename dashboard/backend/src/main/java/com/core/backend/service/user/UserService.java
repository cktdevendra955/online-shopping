package com.core.backend.service.user;

import com.core.backend.dto.user.UserDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {
    List<UserDto> getAll();
    ResponseEntity<?> getById(Long id);
}
