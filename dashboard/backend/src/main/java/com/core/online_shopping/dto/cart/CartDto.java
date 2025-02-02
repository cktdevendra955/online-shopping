package com.core.online_shopping.dto.cart;

import com.core.online_shopping.dto.BaseDto;
import com.core.online_shopping.dto.product.ProductDto;
import com.core.online_shopping.dto.user.UserDto;
import com.core.online_shopping.entity.cart.CartEntity;
import org.springframework.beans.BeanUtils;


public class CartDto extends BaseDto {
    private UserDto user;
    private ProductDto product;
    private int quantity;


    public static CartEntity cartDtoToCart(CartDto cartDto){
        CartEntity cartEntity = new CartEntity();
        BeanUtils.copyProperties(cartDto,cartEntity);
        return cartEntity;
    }

    public static CartDto cartToCartDto(CartEntity cartEntity){
        CartDto cartDto = new CartDto();
        BeanUtils.copyProperties(cartEntity,cartDto);
        return cartDto;
    }

}
