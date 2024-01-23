package com.twitter.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class Tweet {
	
	@Id
	private Long id;	
	
	@ManyToOne
	private User user;
	
	private String content;
	
	private String image;
	
	private String video;
	
	@OneToMany(mappedBy = "tweet", cascade = CascadeType.ALL)
	private List<Likes> likes=new ArrayList<>();
	
	@OneToMany
	private List<Tweet> replyTweets=new ArrayList<>();
	
	private List<User> retweetUser=new ArrayList<>();
	
	private Tweet replyFor;
	
	private boolean isReply;	
	private boolean isTweet;
	
}
