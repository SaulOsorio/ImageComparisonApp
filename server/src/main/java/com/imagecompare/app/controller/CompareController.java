package com.imagecompare.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	
	
	@GetMapping("/compare")
	@RateLimited
	@CrossOrigin(origins = "http://localhost:5173")
	public String getComparisonResult(){
		baseImageName = Names.getBaseImageName();
		compareImageName = Names.getCompareImageName();
		try {
			return this.compareService.compareImage(baseImageName,compareImageName);
		}
		catch(Exception e){
			e.printStackTrace();
			return "{\"status\":\"Could not compare: "+ e.getMessage() +"\"}";
		}
	}
}