package com.imagecompare.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.imagecompare.app.service.CompareService;

@RestController
@RequestMapping("compare")
public class CompareController {
	
	@Autowired
	CompareService compareService;
	
	
	@GetMapping("/")
	public ResponseEntity<String> getComparisonResult(){
		try {
			return new ResponseEntity<String>(this.compareService.compareImage(),HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<String>("Could not compare: " + e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
}
