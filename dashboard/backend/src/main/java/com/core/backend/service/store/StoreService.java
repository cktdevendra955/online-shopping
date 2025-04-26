package com.core.backend.service.store;

import com.core.backend.dto.store.StoreDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface StoreService {

    List<StoreDto> getAll();
    ResponseEntity<?> create(StoreDto storeDto);
    ResponseEntity<?> getById(Long id);
    ResponseEntity<?> updateById(StoreDto storeDto,Long id);
    ResponseEntity<?> deleteById(Long id);
}
