package com.example.demo.service;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.LoginResponse;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

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
}