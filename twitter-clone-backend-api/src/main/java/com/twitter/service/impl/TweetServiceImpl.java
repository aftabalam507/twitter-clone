package com.twitter.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.twitter.exception.TweetException;
import com.twitter.exception.UserException;
import com.twitter.model.Tweet;
import com.twitter.model.User;
import com.twitter.repository.TweetRepository;
import com.twitter.request.TweetReplyRequest;
import com.twitter.service.TweetService;

@Service
public class TweetServiceImpl implements TweetService {

	@Autowired
	private TweetRepository tweetRepository;

	@Override
	public Tweet createTweet(Tweet req, User user) throws UserException {

		Tweet tweet = new Tweet();
		tweet.setContent(req.getContent());
		tweet.setCreatedAt(LocalDateTime.now());
		tweet.setImage(req.getImage());
		tweet.setUser(user);
		tweet.setReply(false);
		tweet.setTweet(true);
		tweet.setVideo(req.getVideo());

		return this.tweetRepository.save(tweet);
	}

	@Override
	public List<Tweet> findAllTweet() {

		return this.tweetRepository.findAllByIsTweetTrueOrderByCreatedAtDesc();
	}

	@Override
	public Tweet reTweet(Long tweetId, User user) throws UserException, TweetException {
		// Tweet tweet = findById(tweetId);
		Tweet tweet = this.tweetRepository.findById(tweetId)
				.orElseThrow(() -> new TweetException("Tweet not found with id" + tweetId));

		if (tweet.getRetweetUser().contains(user)) {
			tweet.getRetweetUser().remove(user);
		} else {
			tweet.getRetweetUser().add(user);
		}
		return tweetRepository.save(tweet);
	}

	@Override
	public Tweet findById(Long tweetId) throws TweetException {
		Tweet tweet = this.tweetRepository.findById(tweetId)
				.orElseThrow(() -> new TweetException("Tweet not found with id" + tweetId));
		return tweet;
	}

	@Override
	public void deleteTweetById(Long tweetId, Long userId) throws TweetException, UserException {
		Tweet tweet = this.tweetRepository.findById(tweetId)
				.orElseThrow(() -> new TweetException("Tweet not found with id" + tweetId));
		if (!userId.equals(tweet.getUser().getId())) {
			throw new UserException("You can't delete another user's tweet");
		}
		tweetRepository.deleteById(tweet.getId());
	}

	@Override
	public Tweet removeFromRetweet(Long tweetId, User user) throws TweetException, UserException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Tweet createReply(TweetReplyRequest req, User user) throws TweetException {

		Tweet replyFor = this.tweetRepository.findById(req.getTweetId())
				.orElseThrow(() -> new TweetException("Tweet not found with id" + req.getTweetId()));

		Tweet tweet = new Tweet();
		tweet.setContent(req.getContent());
		tweet.setCreatedAt(LocalDateTime.now());
		tweet.setImage(req.getImage());
		tweet.setUser(user);
		tweet.setReply(true);
		tweet.setTweet(false);
		tweet.setReplyFor(replyFor);

		Tweet savedReply = this.tweetRepository.save(tweet);

		tweet.getReplyTweets().add(savedReply);
		return this.tweetRepository.save(replyFor);
	}

	@Override
	public List<Tweet> getUserTweet(User user) {

		return this.tweetRepository.findByRetweetUserContainsOrUser_IdAndIsTweetTrueOrderByCreatedAtDesc(user,
				user.getId());
	}

	@Override
	public List<Tweet> findbyLikesContainsUser(User user) {

		return this.tweetRepository.findByLikeUser_id(user.getId());
	}

}
