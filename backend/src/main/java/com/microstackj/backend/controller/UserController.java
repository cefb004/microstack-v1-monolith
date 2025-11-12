package com.microstackj.backend.controller;

import com.microstackj.backend.model.User;
import com.microstackj.backend.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "https://microstack-j-front.onrender.com")
@Tag(name = "Users", description = "APIs para gerenciar usuários")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    @Operation(summary = "Listar usuários", description = "Retorna lista de usuários")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    @Operation(summary = "Criar usuário", description = "Cria um novo usuário")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }
}
