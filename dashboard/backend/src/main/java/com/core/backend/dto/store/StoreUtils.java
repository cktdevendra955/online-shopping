package com.core.backend.dto.store;
import com.core.backend.entity.store.StoreEntity;
import org.springframework.beans.BeanUtils;

public class StoreUtils {

    public static StoreEntity DTO_TO_ENTITY(StoreDto storeDto){
        StoreEntity storeEntity = new StoreEntity();
        BeanUtils.copyProperties(storeDto,storeEntity);
        return storeEntity;
    }

    public static StoreDto ENTITY_TO_DTO(StoreEntity storeEntity){
        StoreDto storeDto = new StoreDto();
        BeanUtils.copyProperties(storeEntity,storeDto);
        return storeDto;
    }
}
