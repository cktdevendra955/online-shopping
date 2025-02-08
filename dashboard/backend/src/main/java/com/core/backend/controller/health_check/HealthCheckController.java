package com.core.backend.controller.health_check;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HealthCheckController {
    @GetMapping("health-check")
    public ResponseEntity<?> healthCheck(){
        return new ResponseEntity<>(Map.of("message","OK"),HttpStatus.OK);
    }
}
