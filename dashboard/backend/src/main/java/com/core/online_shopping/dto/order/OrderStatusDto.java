package com.core.online_shopping.dto.order;

import com.core.online_shopping.dto.BaseDto;
import com.core.online_shopping.entity.order.OrderEntity;

public class OrderStatusDto extends BaseDto {

    private OrderEntity order;
    private boolean isAccept;
    private boolean isProcessed;
    private boolean isPacked;
    private boolean isDispach;
    private boolean isReturn;
}
