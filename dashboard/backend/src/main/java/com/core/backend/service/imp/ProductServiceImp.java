package com.core.backend.service.imp;

import com.core.backend.dto.product.ProductDto;
import com.core.backend.dto.product.ProductUtils;
import com.core.backend.dto.store.StoreDto;
import com.core.backend.dto.store.StoreUtils;
import com.core.backend.entity.product.ProductEntity;
import com.core.backend.entity.store.StoreEntity;
import com.core.backend.exception_handling.ResourceNotFundException;
import com.core.backend.repository.product.ProductRepo;
import com.core.backend.service.product.ProductService;
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
public class ProductServiceImp implements ProductService {

    @Autowired
    private ProductRepo productRepo;

    @Override
    public List<ProductDto> getAll() {
        List<ProductEntity> products = this.productRepo.findAll();
        List<ProductDto> list = products.stream().map(product -> ProductUtils.ENTITY_TO_DTO(product)).collect(Collectors.toList());
        return list;
    }

    @Override
    public ResponseEntity<?> create(ProductDto productDto) {
        try{
            ProductEntity productEntity = ProductUtils.DTO_TO_ENTITY(productDto);
            productEntity.setCreatedAt(new Date());
            ProductEntity saved = this.productRepo.save(productEntity);
            return new ResponseEntity<ProductDto>(ProductUtils.ENTITY_TO_DTO(saved), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(Map.of("Message",e.getMessage()),HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> getById(Long id) {
        ProductEntity productEntity = this.productRepo.findById(id).orElseThrow(()-> new ResourceNotFundException("Product", "ID ",id));
        return new ResponseEntity<>(ProductUtils.ENTITY_TO_DTO(productEntity),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> updateById(ProductDto productDto, Long id) {
        Optional<ProductEntity> data = this.productRepo.findById(id);
        if (data.isPresent()){
            try{
                ProductEntity productEntity = data.get();
                productEntity.setTitle(productDto.getTitle());
                productEntity.setDescription(productDto.getDescription());
                productEntity.setSlug(productDto.getSlug());
                productEntity.setThumbnail(productDto.getThumbnail());
                productEntity.setNew_price(productDto.getOld_price());
                productEntity.setNew_price(productDto.getNew_price());
                productEntity.setUpdatedAt(new Date());

                ProductEntity saved = this.productRepo.save(productEntity);
                return new ResponseEntity<ProductDto>(ProductUtils.ENTITY_TO_DTO(saved), HttpStatus.CREATED);
            } catch (Exception e) {
                return new ResponseEntity<>(Map.of("Message",e.getMessage()),HttpStatus.BAD_REQUEST);
            }
        }else {
            return new ResponseEntity<>(Map.of("Message","DATA NOT FOUND"),HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<?> deleteById(Long id) {
        Optional<ProductEntity> data = this.productRepo.findById(id);
        if (data.isPresent()){
            this.productRepo.deleteById(id);
            return new ResponseEntity<>(Map.of("Message","1 ROW DELETED"),HttpStatus.OK);
        }else {
            return new ResponseEntity<>(Map.of("Message","DATA NOT FOUND"),HttpStatus.NOT_FOUND);
        }
    }
}
