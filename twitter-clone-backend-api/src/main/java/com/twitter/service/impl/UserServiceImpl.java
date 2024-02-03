package com.twitter.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.twitter.config.JwtProvider;
import com.twitter.exception.UserException;
import com.twitter.model.User;
import com.twitter.repository.UserRepository;
import com.twitter.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private JwtProvider jwtProvider;

	@Override
	public User findUserById(Long userId) throws UserException {
		User user = this.userRepository.findById(userId)
				.orElseThrow(() -> new UserException("user not found with id" + userId));
		return user;
	}

	@Override
	public User findUserProfileByJwt(String jwt) throws UserException {
		String email = jwtProvider.getEmailFromToken(jwt);
		User user = userRepository.findByEmail(email);

		if (user == null) {
			throw new UserException("User not with email :" + email);
		}

		return user;
	}

	@Override
	public User updateUser(Long userId, User req) throws UserException {
		User user = this.userRepository.findById(userId)
				.orElseThrow(() -> new UserException("user not found with id" + userId));

		if (req.getFullName() != null) {
			user.setFullName(req.getFullName());
		}

		if (req.getImage() != null) {
			user.setImage(req.getImage());
		}

		if (req.getBackgroundImage() != null) {
			user.setBackgroundImage(req.getBackgroundImage());
		}

		if (req.getLocation() != null) {
			user.setLocation(req.getLocation());
		}

		if (req.getBio() != null) {
			user.setBio(req.getBio());
		}

		if (req.getWebsite() != null) {
			user.setWebsite(req.getWebsite());
		}

		return this.userRepository.save(user);
	}

	@Override
	public User followUser(Long userId, User user) throws UserException {

		User followToUser = this.userRepository.findById(userId)
				.orElseThrow(() -> new UserException("user not found with id" + userId));

		if (user.getFollowings().contains(followToUser) && followToUser.getFollowers().contains(user)) {
			user.getFollowings().remove(followToUser);
			followToUser.getFollowers().remove(user);
		} else {
			user.getFollowings().add(followToUser);
			followToUser.getFollowers().add(user);
		}
		this.userRepository.save(user);
		this.userRepository.save(followToUser);
		return followToUser;
	}

	@Override
	public List<User> searchUser(String query) {
		
		return this.userRepository.searchUser(query);
	}

}
