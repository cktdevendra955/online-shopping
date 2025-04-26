package com.core.backend.controller.store;

import com.core.backend.dto.store.StoreDto;
import com.core.backend.service.store.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("store/")
public class StoreController {

    @Autowired
    private StoreService storeService;


    @GetMapping
    public List<StoreDto> getAll(){
        return this.storeService.getAll();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody StoreDto storeDto){
        return this.storeService.create(storeDto);
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return this.storeService.getById(id);
    }

    @PutMapping("{id}")
    public ResponseEntity<?> updateById(@RequestBody StoreDto storeDto,@PathVariable Long id){
        return this.storeService.updateById(storeDto,id);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){
        return this.storeService.deleteById(id);
    }

}
