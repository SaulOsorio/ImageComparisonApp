package com.imagecompare.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.imagecompare.app.model.Names;
import com.imagecompare.app.service.CompareService;

@RestController
public class CompareController {
	
	@Autowired
	CompareService compareService;
	
	@CrossOrigin(origins = "http://localhost:5173", methods = {RequestMethod.POST})
	@PostMapping("/compare")
	public ResponseEntity<String> getComparisonResult(@RequestBody Names names){
		String baseImageName = names.getBaseImageName();
		String compareImageName = names.getCompareImageName();
		try {
			System.out.println(baseImageName);
			 System.out.println(compareImageName);
			return new ResponseEntity<String>(this.compareService.compareImage(baseImageName,compareImageName),HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<String>("Could not compare: " + e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
}