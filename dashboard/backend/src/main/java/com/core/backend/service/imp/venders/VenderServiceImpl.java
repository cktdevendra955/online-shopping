package com.core.backend.service.imp.venders;

import com.core.backend.dto.venders.VenderDto;
import com.core.backend.repository.venders.VenderRepo;
import com.core.backend.service.venders.VenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VenderServiceImpl implements VenderService {

    @Autowired
    private VenderRepo venderRepo;


    @Override
    public List<VenderDto> getAll() {
        return List.of();
    }

    @Override
    public ResponseEntity<?> create(VenderDto venderDto) {
        return null;
    }

    @Override
    public ResponseEntity<?> updateById(VenderDto venderDto, Long id) {
        return null;
    }

    @Override
    public ResponseEntity<?> getById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<?> deleteById(Long id) {
        return null;
    }
}
