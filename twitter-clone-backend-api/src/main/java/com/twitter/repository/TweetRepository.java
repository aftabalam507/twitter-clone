package com.twitter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;

import com.twitter.model.Tweet;
import com.twitter.model.User;

public interface TweetRepository extends JpaRepository<Tweet, Long> {
	
	List<Tweet> findAllByIsTweetTrueOrderByCreatedAtDesc();
	
	List<Tweet> findByRetweetUserContainsOrUser_IdAndIsTweetTrueOrderByCreatedAtDesc(User user, Long userId);
	
	List<Tweet> findByLikesContainingOrderByCreatedAtDesc(User user);
	
	@Query("Select t From Tweet t JOIN t.likes l where l.user.id=:userId")
	List<Tweet> findByLikeUser_id(Long userId);
	
//	@Query("SELECT t FROM Tweet t JOIN t.likes l WHERE l.user.id = :userId")
//	List<Tweet> findByLikeUserId(@Param("userId") Long userId);
}
