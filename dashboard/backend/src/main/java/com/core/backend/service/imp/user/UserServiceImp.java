package com.core.backend.service.imp.user;

import com.core.backend.dto.user.UserDto;
import com.core.backend.dto.user.UserUtils;
import com.core.backend.entity.user.UserEntity;
import com.core.backend.exception_handling.ResourceNotFundException;
import com.core.backend.repository.user.UserRepo;
import com.core.backend.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public List<UserDto> getALl() {
        List<UserEntity> users = this.userRepo.findAll();
        List<UserDto> collections = users.stream().map(user -> UserUtils.ENTITY_TO_DTO(user)).collect(Collectors.toList());
        return collections;
    }

    @Override
    public ResponseEntity<?> create(UserDto userDto) {
        try {
            UserEntity userEntity = UserUtils.DTO_TO_ENTITY(userDto);
            userEntity.setCreatedAt(new Date());
            userEntity.setActive(true);
            UserEntity saved = this.userRepo.save(userEntity);
            return new ResponseEntity<>(UserUtils.ENTITY_TO_DTO(saved), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(Map.of("message",e.getMessage()), HttpStatus.CREATED);
        }
    }

    @Override
    public UserDto getById(Long id) {
        UserEntity userEntity = this.userRepo.findById(id).orElseThrow(()-> new ResourceNotFundException("USER ", "ID ",id));
        return UserUtils.ENTITY_TO_DTO(userEntity);
    }

}
