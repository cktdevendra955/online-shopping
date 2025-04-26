package com.core.backend.controller.user;

import com.core.backend.dto.user.UserDto;
import com.core.backend.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("user/")
public class UserController {


    @Autowired
    private UserService userService;


    @GetMapping
    public List<UserDto> getAll(){
        return this.userService.getAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return  this.userService.getById(id);
    }

}
