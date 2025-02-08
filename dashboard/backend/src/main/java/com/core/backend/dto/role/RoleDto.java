package com.core.backend.dto.role;

import com.core.backend.entity.BaseEntity;
import com.core.backend.entity.role.RoleEntity;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;

public class RoleDto extends BaseEntity {

    private String title;
    private String description;
    private String slug;

    public RoleDto() {
    }

    public RoleDto(String title, String description, String slug) {
        this.title = title;
        this.description = description;
        this.slug = slug;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }



}
