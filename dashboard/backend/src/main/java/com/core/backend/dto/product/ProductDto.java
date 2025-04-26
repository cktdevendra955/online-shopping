package com.core.backend.dto.product;

import com.core.backend.dto.BaseDto;

public class ProductDto extends BaseDto {


    private String title;
    private String description;
    private String slug;
    private String thumbnail;
    private String old_price;
    private String new_price;

    public ProductDto() {
    }

    public ProductDto(String title, String description, String slug, String thumbnail, String old_price, String new_price) {
        this.title = title;
        this.description = description;
        this.slug = slug;
        this.thumbnail = thumbnail;
        this.old_price = old_price;
        this.new_price = new_price;
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

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getOld_price() {
        return old_price;
    }

    public void setOld_price(String old_price) {
        this.old_price = old_price;
    }

    public String getNew_price() {
        return new_price;
    }

    public void setNew_price(String new_price) {
        this.new_price = new_price;
    }
}
