package com.twitter.util;

import com.twitter.model.Tweet;
import com.twitter.model.TweetLike;
import com.twitter.model.User;

public class TweetUtil {

	public final static boolean isLikedByReqUser(User reqUser, Tweet tweet) {

		for (TweetLike like : tweet.getLikes()) {
			if (like.getUser().getId().equals(reqUser.getId())) {
				return true;
			}
		}
		return false;
	}

	public final static boolean isRetweetByReqUser(User reqUser, Tweet tweet) {
		for (User user : tweet.getRetweetUser()) {
			if (user.getId().equals(reqUser.getId())) {
				return true;
			}
		}
		return false;
	}
}
