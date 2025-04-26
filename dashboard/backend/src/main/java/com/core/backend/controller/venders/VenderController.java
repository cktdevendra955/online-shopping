package com.core.backend.controller.venders;

import com.core.backend.dto.venders.VenderDto;
import com.core.backend.service.venders.VenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("venders/")
public class VenderController {


    @Autowired
    private VenderService venderService;

    @GetMapping
    public List<VenderDto> getAll(){
        return this.venderService.getAll();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody VenderDto venderDto){
        return this.venderService.create(venderDto);
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getById(@PathVariable  Long id){
        return this.venderService.getById(id);
    }

    @PutMapping("{id}")
    public ResponseEntity<?> updateById(@RequestBody VenderDto venderDto,@PathVariable  Long id){
        return this.venderService.updateById(venderDto,id);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteById(@PathVariable  Long id){
        return this.venderService.deleteById(id);
    }
}
