package com.core.online_shopping.dto;

import jakarta.persistence.MappedSuperclass;

import java.util.Date;
import java.util.UUID;

@MappedSuperclass
public class BaseDto {
    private UUID id;
    private Date createdAt;
    private Date updatedAt;
    private Date deletedAa;
}
