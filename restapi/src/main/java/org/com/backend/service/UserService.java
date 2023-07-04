package org.com.backend.service;

import org.com.backend.model.User;
import org.com.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
	
	public class UserService {
	
	  @Autowired
	  private UserRepository userRepository;

	    public void saveUser(String username, String password) {
	        User user = new User();
	        user.setUsername(username);
	        user.setPassword(password);
	        userRepository.save(user);
	    }
	    
	    public boolean validateUser(String username, String password) {
	        User user = userRepository.findByUsername(username);
	        return user != null && user.getPassword().equals(password);
	    }
	}


