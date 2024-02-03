package com.twitter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.twitter.model.TweetLike;

public interface TweetLikeRepository extends JpaRepository<TweetLike, Long> {
	
	@Query("SELECT l FROM TweetLike l WHERE l.user.id=:userId AND l.tweet.id=:tweetId")
	public TweetLike isTweetLikeExist(@Param("userId") Long userId, @Param("tweetId") Long tweetId);
	
	@Query("SELECT l FROM TweetLike l WHERE l.tweet.id=:tweetId")
	public List<TweetLike> findByTweetId(@Param("tweetId")Long tweetId);
}
