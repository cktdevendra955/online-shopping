package com.core.backend.entity.category;

import com.core.backend.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "categories_demo")
public class CategoryEntity extends BaseEntity {

    @Column(nullable = false,length = 50)
    private String title;
    @Column(nullable = false,length = 250)
    private String description;
    @Column(nullable = false,length = 100)
    private String slug;

    private boolean isActive;


    public CategoryEntity() {
    }

    public CategoryEntity(String title, String description, String slug, boolean isActive) {
        this.title = title;
        this.description = description;
        this.slug = slug;
        this.isActive = isActive;
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

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
