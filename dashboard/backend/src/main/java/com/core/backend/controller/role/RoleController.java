package com.core.backend.controller.role;

import com.core.backend.dto.role.RoleDto;
import com.core.backend.service.role.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("ap/v1/role/")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping
    public ResponseEntity<List<RoleDto>> getAll(){
        return this.roleService.getAll();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody RoleDto roleDto){
        return this.roleService.create(roleDto);
    }
}
