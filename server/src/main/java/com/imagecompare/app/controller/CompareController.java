package com.imagecompare.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.imagecompare.app.model.Names;
import com.imagecompare.app.service.CompareService;

@RestController
public class CompareController {
	
	@Autowired
	private CompareService compareService;
	private String baseImageName;
	private String compareImageName;
	
	@CrossOrigin(origins = "http://localhost:5173")
	@GetMapping("/compare")
	public ResponseEntity<String> getComparisonResult(){
		baseImageName = Names.getBaseImageName();
		compareImageName = Names.getCompareImageName();
		try {
			System.out.println(baseImageName);
			System.out.println(compareImageName);
			return new ResponseEntity<String>(this.compareService.compareImage(baseImageName,compareImageName),HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<String>("Could not compare: " + e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
}