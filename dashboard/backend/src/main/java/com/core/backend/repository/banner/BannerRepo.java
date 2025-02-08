package com.core.backend.repository.banner;

import com.core.backend.entity.banner.BannerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BannerRepo extends JpaRepository<BannerEntity,Long> {
}
