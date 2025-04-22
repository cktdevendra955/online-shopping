package com.core.backend.service.venders;

import com.core.backend.dto.venders.VenderDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface VenderService {
    List<VenderDto> getAll();
    public ResponseEntity<?> create(VenderDto venderDto);
    public ResponseEntity<?> updateById(VenderDto venderDto,Long id);
    public ResponseEntity<?> getById(Long id);
    public ResponseEntity<?> deleteById(Long id);
}
