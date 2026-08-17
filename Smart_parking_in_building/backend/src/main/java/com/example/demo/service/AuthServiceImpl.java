package com.example.demo.service;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.LoginResponse;
import com.example.demo.dto.RegisterRequest;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    public AuthServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public LoginResponse login(LoginRequest request) {

        Optional<User> userOptional = userRepository.findByUsername(request.getUsername());

        if (userOptional.isEmpty()) {
            throw new RuntimeException("Invalid username or password");
        }

        User user = userOptional.get();

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid username or password");
        }

        String fakeToken = "mock-jwt-token-for-" + user.getUsername();

        return new LoginResponse(fakeToken, user.getRole());
    }

    @Override
    public String logout(String authHeader) {

        if (authHeader == null || authHeader.trim().isEmpty()) {
            throw new RuntimeException("Full authentication is required");
        }

        String token = authHeader.replace("Bearer ", "").trim();

        if (!token.startsWith("mock-jwt-token-for-")) {
            throw new RuntimeException("Invalid or expired token");
        }

        return "Logged out successfully";
    }

    @Override
    public void register(RegisterRequest request) {

        // Kiểm tra username đã tồn tại
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }

        // Kiểm tra email đã tồn tại
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        // Tạo User mới
        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        user.setUsername(request.getUsername());

        // Chưa mã hóa password
        user.setPassword(request.getPassword());

        // Mặc định
        user.setRole("USER");
        user.setStatus("ACTIVE");

        userRepository.save(user);
    }

}