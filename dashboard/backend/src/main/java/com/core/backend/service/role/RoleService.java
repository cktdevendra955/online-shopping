package com.core.backend.service.role;

import com.core.backend.dto.role.RoleDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface RoleService {

    ResponseEntity<List<RoleDto>> getAll();
    ResponseEntity<?> create(RoleDto roleDto);


}
