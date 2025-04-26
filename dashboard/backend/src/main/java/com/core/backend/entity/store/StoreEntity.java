package com.core.backend.entity.store;

import com.core.backend.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "ender_store")
public class StoreEntity extends BaseEntity {

    @Column(nullable = false, length = 100)
    String title;
    @Column(nullable = false, length = 250)
    String description;
    @Column(nullable = false, length = 120)
    String slug;
    @Column(nullable = true)
    String profile_picture;


    public StoreEntity() {
    }

    public StoreEntity(String title, String description, String slug, String profile_picture) {
        this.title = title;
        this.description = description;
        this.slug = slug;
        this.profile_picture = profile_picture;
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

    public String getProfile_picture() {
        return profile_picture;
    }

    public void setProfile_picture(String profile_picture) {
        this.profile_picture = profile_picture;
    }
}
