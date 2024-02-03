package com.twitter.service;

import java.util.List;

import com.twitter.exception.TweetException;
import com.twitter.exception.UserException;
import com.twitter.model.TweetLike;
import com.twitter.model.User;

public interface TweetLikeService {
	
	public TweetLike likeTweet(Long tweetId,User user)throws UserException,TweetException;
	
	public List<TweetLike> getAllLikes(Long tweetId) throws TweetException;
}
