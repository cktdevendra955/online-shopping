package com.core.backend.service.imp.store;

import com.core.backend.dto.store.StoreDto;
import com.core.backend.dto.store.StoreUtils;
import com.core.backend.dto.venders.VenderDto;
import com.core.backend.dto.venders.VenderUtils;
import com.core.backend.entity.store.StoreEntity;
import com.core.backend.entity.venders.VenderEntity;
import com.core.backend.exception_handling.ResourceNotFundException;
import com.core.backend.repository.store.StoreRepo;
import com.core.backend.service.store.StoreService;
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
public class StoreServiceImpl implements StoreService {

    @Autowired
    private StoreRepo storeRepo;


    @Override
    public List<StoreDto> getAll() {
        List<StoreEntity> storeEntityList = this.storeRepo.findAll();
        List<StoreDto> list = storeEntityList.stream().map(store -> StoreUtils.ENTITY_TO_DTO(store)).collect(Collectors.toList());
        return list;
    }

    @Override
    public ResponseEntity<?> create(StoreDto storeDto) {
        try{
            StoreEntity storeEntity = StoreUtils.DTO_TO_ENTITY(storeDto);
            storeEntity.setCreatedAt(new Date());
            StoreEntity saved = this.storeRepo.save(storeEntity);
            return new ResponseEntity<StoreDto>(StoreUtils.ENTITY_TO_DTO(saved), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(Map.of("Message",e.getMessage()),HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> getById(Long id) {
        StoreEntity storeEntity = this.storeRepo.findById(id).orElseThrow(()-> new ResourceNotFundException("Vender ", "ID ",id));
        return new ResponseEntity<>(StoreUtils.ENTITY_TO_DTO(storeEntity),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> updateById(StoreDto storeDto, Long id) {
        Optional<StoreEntity> data = this.storeRepo.findById(id);
        if (data.isPresent()){
            try{
                StoreEntity storeEntity = data.get();
                storeEntity.setTitle(storeDto.getTitle());
                storeEntity.setDescription(storeDto.getDescription());
                storeEntity.setSlug(storeDto.getSlug());
                storeEntity.setProfile_picture(storeDto.getProfile_picture());
                storeEntity.setUpdatedAt(new Date());
                StoreEntity saved = this.storeRepo.save(storeEntity);
                return new ResponseEntity<StoreDto>(StoreUtils.ENTITY_TO_DTO(saved), HttpStatus.CREATED);
            } catch (Exception e) {
                return new ResponseEntity<>(Map.of("Message",e.getMessage()),HttpStatus.BAD_REQUEST);
            }
        }else {
            return new ResponseEntity<>(Map.of("Message"," Store Not Found"),HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<?> deleteById(Long id) {
        Optional<StoreEntity> data = this.storeRepo.findById(id);
        if (data.isPresent()){
            this.storeRepo.deleteById(id);
            return new ResponseEntity<>(Map.of("Message","1 Row Deleted"),HttpStatus.OK);
        }else {
            return new ResponseEntity<>(Map.of("Message"," Store Not Found"),HttpStatus.NOT_FOUND);
        }
    }
}
