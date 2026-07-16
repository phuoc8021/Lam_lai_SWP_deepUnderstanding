package com.example.demo.controller;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.LoginResponse;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        // 1. Tìm user trong database theo username gửi lên
        Optional<User> userOptional = userRepository.findByUsername(request.getUsername());

        // 2. Nếu không tìm thấy user
        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Invalid username or password"));
        }

        User user = userOptional.get();

        // 3. So sánh mật khẩu (So sánh chuỗi thuần túy cho giai đoạn đầu)
        if (!user.getPassword().equals(request.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Invalid username or password"));
        }

        // 4. Nếu đúng: Trả về Token giả lập và Role của User theo đúng Contract
        String fakeToken = "mock-jwt-token-for-" + user.getUsername();
        LoginResponse response = new LoginResponse(fakeToken, user.getRole());

        return ResponseEntity.ok(response);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestHeader(value = "Authorization", required = false) String authHeader) {

        System.out.println(">>> Auth Header received: " + authHeader);

        if (authHeader == null || authHeader.trim().isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Full authentication is required to access this resource"));
        }

        // Với cấu hình Swagger mới, authHeader nhận được sẽ tự động là chuỗi "Bearer
        // <token>" chuẩn chỉ
        String token = authHeader.replace("Bearer ", "").trim();

        if (!token.startsWith("mock-jwt-token-for-")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Invalid or expired token"));
        }

        return ResponseEntity.ok(Map.of("message", "Logged out successfully"));
    }
}