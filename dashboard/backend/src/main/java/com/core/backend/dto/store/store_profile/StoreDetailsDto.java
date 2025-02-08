package com.core.backend.dto.store.store_profile;

import com.core.backend.dto.BaseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class StoreDetailsDto extends BaseDto {
    private String state;
    private String city;
    private String pinCode;
}
