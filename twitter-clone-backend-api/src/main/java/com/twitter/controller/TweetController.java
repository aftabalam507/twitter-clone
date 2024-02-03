package com.twitter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.twitter.service.TweetService;
import com.twitter.service.UserService;

@RestController
@RequestMapping("/api/tweets")
public class TweetController {

	@Autowired
	private TweetService tweetService;

	@Autowired
	private UserService userService;
	
	
}
