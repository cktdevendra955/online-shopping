package com.core.backend.service.imp.user;

import com.core.backend.dto.store.StoreUtils;
import com.core.backend.dto.user.UserDto;
import com.core.backend.dto.user.UserUtils;
import com.core.backend.entity.store.StoreEntity;
import com.core.backend.entity.user.UserEntity;
import com.core.backend.exception_handling.ResourceNotFundException;
import com.core.backend.repository.user.UserRepo;
import com.core.backend.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;
    @Override
    public List<UserDto> getAll() {
        List<UserEntity> users = this.userRepo.findAll();
        List<UserDto> list = users.stream().map(user-> UserUtils.ENTITY_TO_DTO(user)).collect(Collectors.toList());
        return list;
    }

    @Override
    public ResponseEntity<?> getById(Long id) {
        UserEntity userEntity = this.userRepo.findById(id).orElseThrow(()-> new ResourceNotFundException("User ", "ID ",id));
        return new ResponseEntity<>(UserUtils.ENTITY_TO_DTO(userEntity), HttpStatus.OK);
    }
}
