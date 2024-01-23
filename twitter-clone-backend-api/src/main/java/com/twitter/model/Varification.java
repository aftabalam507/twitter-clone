package com.twitter.model;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class Varification {
	
	private boolean status=false;
	private LocalDateTime startAt;
	private LocalDateTime endAt;
	private String planType;
	
}
