package com.core.backend.repository.venders;

import com.core.backend.entity.venders.VenderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VenderRepo extends JpaRepository<VenderEntity,Long> {
}
