package com.event.event.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.event.dto.request.AuthenticationRequest;
import com.event.event.dto.request.RegisterRequest;
// import com.connect.connect.dto.request.RegisterRequest;
// import com.connect.connect.dto.request.UserRequest;
import com.event.event.dto.response.AuthenticationResponse;
import com.event.event.service.AuthenticationService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
// @CrossOrigin(origins="*")
@CrossOrigin("*")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @Tag(name="Register",description="Try login using email and password")
    @PostMapping("/register") 
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @Tag(name="Authenticate",description="Authentication")
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
}