package com.core.backend.service.imp.venders;


import com.core.backend.dto.venders.VenderDto;
import com.core.backend.dto.venders.VenderUtils;

import com.core.backend.entity.venders.VenderEntity;
import com.core.backend.exception_handling.ResourceNotFundException;
import com.core.backend.repository.venders.VenderRepo;
import com.core.backend.service.venders.VenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class VenderServiceImpl implements VenderService {

    @Autowired
    private VenderRepo venderRepo;

    @Override
    public List<VenderDto> getAll()
    {
        List<VenderEntity> venders = this.venderRepo.findAll();
        List<VenderDto> listOfVenders = venders.stream().map( vender -> VenderUtils.ENTITY_TO_DTO(vender)).collect(Collectors.toList());
        return listOfVenders;
    }

    @Override
    public ResponseEntity<?> create(VenderDto venderDto) {
        try{
            VenderEntity venderEntity = VenderUtils.DTO_TO_ENTITY(venderDto);
            venderEntity.setCreatedAt(new Date());
            VenderEntity saved = this.venderRepo.save(venderEntity);
            return new ResponseEntity<VenderDto>(VenderUtils.ENTITY_TO_DTO(saved), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(Map.of("Message",e.getMessage()),HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> updateById(VenderDto venderDto, Long id) {
        Optional<VenderEntity> data = this.venderRepo.findById(id);
        if (data.isPresent()){
            VenderEntity venderEntity = data.get();
            venderEntity.setFirstName(venderDto.getFirstName());
            venderEntity.setLastName(venderDto.getLastName());
            venderEntity.setEmail(venderDto.getEmail());
            venderEntity.setMobile(venderDto.getMobile());
            venderEntity.setUpdatedAt(new Date());
            VenderEntity saved = this.venderRepo.save(venderEntity);
            return new ResponseEntity<>(Map.of("Payload",VenderUtils.ENTITY_TO_DTO(saved)),HttpStatus.OK);
        }else {
            return new ResponseEntity<>(Map.of("Message","Data Not Found"),HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<?> getById(Long id) {
        VenderEntity venderEntity = this.venderRepo.findById(id).orElseThrow(()-> new ResourceNotFundException("Vender ", "ID ",id));
        return new ResponseEntity<>(VenderUtils.ENTITY_TO_DTO(venderEntity),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> deleteById(Long id) {
        Optional<VenderEntity> data = this.venderRepo.findById(id);
        if (data.isPresent()){
            this.venderRepo.deleteById(id);
            return new ResponseEntity<>(Map.of("Message","1 Row Deleted"),HttpStatus.OK);
        }else {
            return new ResponseEntity<>(Map.of("Message","Data Not Found"),HttpStatus.NOT_FOUND);
        }
    }
}
