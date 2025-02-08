package com.core.backend.service.imp.role;

import com.core.backend.dto.role.RoleUtils;
import com.core.backend.dto.role.RoleDto;
import com.core.backend.entity.role.RoleEntity;
import com.core.backend.repository.role.RoleRepo;
import com.core.backend.service.role.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class RoleServiceImp implements RoleService {

    @Autowired
    private RoleRepo roleRepo;

    @Override
    public ResponseEntity<List<RoleDto>> getAll() {
        List<RoleEntity> roles = this.roleRepo.findAll();
        List<RoleDto> colloction = roles.stream().map(role -> RoleUtils.ENTITY_TO_DTO(role)).collect(Collectors.toList());
        return new ResponseEntity<>( colloction,HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> create(RoleDto roleDto) {
        try {
            RoleEntity role = RoleUtils.DTO_TO_ENTITY(roleDto);
            role.setCreatedAt(new Date());
            RoleEntity saved = this.roleRepo.save(role);
            return new ResponseEntity<>(RoleUtils.ENTITY_TO_DTO(saved), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(Map.of("ERROR",e.getMessage()), HttpStatus.BAD_REQUEST);
        }
    }
}
