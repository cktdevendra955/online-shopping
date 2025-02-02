package com.core.online_shopping.entity.order;

import com.core.online_shopping.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "order_status")
public class OrderStatusEntity extends BaseEntity {
    private OrderEntity order;
    private boolean isAccept;
    private boolean isProcessed;
    private boolean isPacked;
    private boolean isDispach;
    private boolean isReturn;
}
