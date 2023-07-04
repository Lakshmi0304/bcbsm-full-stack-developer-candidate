package org.com.backend.controller;


import org.com.backend.model.User;
import org.com.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping
public class  UserController {	
	
		@Autowired
		private UserService userService;
        
		@CrossOrigin(origins = "http://localhost:4200")
		@PostMapping("/api/register")
		public void createUser(@RequestBody User user) {
			userService.saveUser(user.getUsername(), user.getPassword());
		}
		
		@CrossOrigin(origins = "http://localhost:4200")
	    @PostMapping("/api/login")
	    public ResponseEntity<String> login(@RequestBody User user) {
	        String username = user.getUsername();
	        String password = user.getPassword();
	        System.out.println(username);
	        if (userService.validateUser(username, password)) {
	        	return ResponseEntity.status(HttpStatus.OK).body("Login Successful");
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
	        }
	    }
		 
	}

