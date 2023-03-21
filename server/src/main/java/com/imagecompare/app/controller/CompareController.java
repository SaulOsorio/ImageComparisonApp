package com.imagecompare.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.imagecompare.app.service.CompareService;

@RestController
public class CompareController {
	
	@Autowired
	CompareService compareService;
	
	
	@GetMapping("/compare")
	public ResponseEntity<String> getComparisonResult(@RequestParam("baseImageName") String baseImageName,
            @RequestParam("compareImageName") String compareImageName){
		try {
			System.out.println(baseImageName);
			 System.out.println(compareImageName);
			return new ResponseEntity<String>(this.compareService.compareImage(baseImageName,compareImageName),HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<String>("Could not compare: " + e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
}