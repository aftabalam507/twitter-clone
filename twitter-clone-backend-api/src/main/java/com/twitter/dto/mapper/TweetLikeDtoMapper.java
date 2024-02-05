package com.twitter.dto.mapper;

import java.util.ArrayList;
import java.util.List;

import com.twitter.dto.TweetDto;
import com.twitter.dto.TweetLikeDto;
import com.twitter.dto.UserDto;
import com.twitter.model.TweetLike;
import com.twitter.model.User;

public class TweetLikeDtoMapper {

	public static TweetLikeDto toTweetLikeDto(TweetLike like, User reqUser) {
		UserDto user = UserDtoMapper.toUserDto(like.getUser());
		UserDto reqUserDto = UserDtoMapper.toUserDto(reqUser);
		TweetDto tweet = TweetDtoMapper.toTweetDto(like.getTweet(), reqUser);

		TweetLikeDto tweetLikeDto = new TweetLikeDto();
		tweetLikeDto.setId(like.getId());
		tweetLikeDto.setTweet(tweet);
		tweetLikeDto.setUser(user);

		return tweetLikeDto;

	}

	public static List<TweetLikeDto> toTweetLikeDtos(List<TweetLike> likes, User reqUser) {
		List<TweetLikeDto> likeDtos = new ArrayList<>();

		for (TweetLike like : likes) {
			UserDto user = UserDtoMapper.toUserDto(like.getUser());
			TweetDto tweet = TweetDtoMapper.toTweetDto(like.getTweet(), reqUser);

			TweetLikeDto tweetLikeDto = new TweetLikeDto();
			tweetLikeDto.setId(like.getId());
			tweetLikeDto.setTweet(tweet);
			tweetLikeDto.setUser(user);
			likeDtos.add(tweetLikeDto);
		}
		return likeDtos;
	}
}
