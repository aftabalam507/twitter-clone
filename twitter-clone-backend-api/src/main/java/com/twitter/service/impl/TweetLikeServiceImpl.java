package com.twitter.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.twitter.exception.TweetException;
import com.twitter.exception.UserException;
import com.twitter.model.TweetLike;
import com.twitter.model.Tweet;
import com.twitter.model.User;
import com.twitter.repository.TweetLikeRepository;
import com.twitter.repository.TweetRepository;
import com.twitter.service.TweetLikeService;
import com.twitter.service.TweetService;

@Service
public class TweetLikeServiceImpl implements TweetLikeService {

	@Autowired
	private TweetLikeRepository tweetLikeRepository;

	@Autowired
	private TweetService tweetService;

	@Autowired
	private TweetRepository tweetRepository;

	@Override
	public TweetLike likeTweet(Long tweetId, User user) throws UserException, TweetException {

		TweetLike isLikeExist = this.tweetLikeRepository.isTweetLikeExist(user.getId(), tweetId);

		if (isLikeExist != null) {
			this.tweetLikeRepository.deleteById(isLikeExist.getId());
			return isLikeExist;
		}

		Tweet tweet = tweetService.findById(tweetId);

		TweetLike like = new TweetLike();
		like.setTweet(tweet);
		like.setUser(user);

		TweetLike savedLike = this.tweetLikeRepository.save(like);
		tweet.getLikes().add(savedLike);
		this.tweetRepository.save(tweet);

		return savedLike;
	}

	@Override
	public List<TweetLike> getAllLikes(Long tweetId) throws TweetException {

		Tweet tweet = this.tweetRepository.findById(tweetId)
				.orElseThrow(() -> new TweetException("Tweet not found with id" + tweetId));

		List<TweetLike> likes = tweetLikeRepository.findByTweetId(tweetId);

		return likes;
	}

}
