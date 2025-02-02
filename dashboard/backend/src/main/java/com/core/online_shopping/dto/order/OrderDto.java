package com.core.online_shopping.dto.order;

import com.core.online_shopping.dto.BaseDto;
import com.core.online_shopping.dto.cart.CartDto;
import com.core.online_shopping.dto.product.ProductDto;
import com.core.online_shopping.dto.user.UserDto;
import com.core.online_shopping.entity.cart.CartEntity;
import com.core.online_shopping.entity.order.OrderEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import org.springframework.beans.BeanUtils;


public class OrderDto extends BaseDto {
    private UserDto user;
    private ProductDto product;
    private int quantity;


    public static OrderDto orderToOrderDto(OrderEntity orderEntity){
        OrderDto orderDto = new OrderDto();
        BeanUtils.copyProperties(orderEntity,orderDto);
        return orderDto;
    }

    public static OrderEntity orderDtoToOrder(OrderDto orderDto){
        OrderEntity orderEntity = new OrderEntity();
        BeanUtils.copyProperties(orderDto,orderEntity);
        return orderEntity;
    }
}
