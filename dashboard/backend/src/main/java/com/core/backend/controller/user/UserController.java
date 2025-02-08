package com.core.backend.controller.user;

import com.core.backend.dto.user.UserDto;
import com.core.backend.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("ap/v1/user/")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<UserDto>> getAll(){
        return ResponseEntity.ok(this.userService.getALl());
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody UserDto userDto){
        return this.userService.create(userDto);
    }

    @GetMapping("{id}")
    public ResponseEntity<UserDto> getById(@PathVariable Long id){
        return ResponseEntity.ok(this.userService.getById(id));
    }

}
