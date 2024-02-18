package com.twitter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.twitter.dto.TweetLikeDto;
import com.twitter.dto.mapper.TweetLikeDtoMapper;
import com.twitter.exception.TweetException;
import com.twitter.exception.UserException;
import com.twitter.model.TweetLike;
import com.twitter.model.User;
import com.twitter.service.TweetLikeService;
import com.twitter.service.UserService;

@RestController
@RequestMapping("/api")
public class TweetLikeController {

	@Autowired
	private UserService userService;

	@Autowired
	private TweetLikeService tweetLikeService;

	@PostMapping("/{tweetId}/like")
	public ResponseEntity<TweetLikeDto> likeTweet(@PathVariable Long tweetId,
			@RequestHeader("Authorization") String jwt) throws UserException, TweetException {

		User user = userService.findUserProfileByJwt(jwt);
		
		TweetLike like = tweetLikeService.likeTweet(tweetId, user);

		TweetLikeDto tweetLikeDto = TweetLikeDtoMapper.toTweetLikeDto(like, user);

		return new ResponseEntity<TweetLikeDto>(tweetLikeDto, HttpStatus.CREATED);
	}
	
	@PostMapping("/tweet/{tweetId}")
	public ResponseEntity<List<TweetLikeDto>> getAllLikes(@PathVariable Long tweetId,
			@RequestHeader("Authorization") String jwt) throws UserException, TweetException {

		User user = userService.findUserProfileByJwt(jwt);
		
		List<TweetLike> allLikes = tweetLikeService.getAllLikes(tweetId);

		List<TweetLikeDto> tweetLikeDtos = TweetLikeDtoMapper.toTweetLikeDtos(allLikes, user);

		return new ResponseEntity<List<TweetLikeDto>>(tweetLikeDtos, HttpStatus.OK);
	}

}
