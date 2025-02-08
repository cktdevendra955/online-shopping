package com.core.backend.entity.role;

import com.core.backend.entity.BaseEntity;
import com.core.backend.entity.user.UserEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "role")
public class RoleEntity extends BaseEntity {

    private String title;
    private String description;
    private String slug;

    @OneToOne(mappedBy = "role")
    private UserEntity user;

    public RoleEntity() {
    }

    public RoleEntity(String title, String description, String slug) {
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
