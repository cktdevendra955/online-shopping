package com.core.backend.dto.category;

import com.core.backend.dto.BaseDto;

public class CategoryDto extends BaseDto {

    private String title;
    private String description;
    private String slug;
    private boolean isActive;

    public CategoryDto() {
    }

    public CategoryDto(String title, String description, String slug, boolean isActive) {
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
