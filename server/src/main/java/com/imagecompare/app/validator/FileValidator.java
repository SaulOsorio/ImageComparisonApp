package com.imagecompare.app.validator;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FilenameUtils;
import org.springframework.web.multipart.MultipartFile;

public class FileValidator {
	public static void validateFile(MultipartFile file) throws Exception{
		if(!validateSize(file)) {
			throw new Exception("Size exceeds the limit of 10 Mb");
		}else if(!validateFileExtension(file)) {
			throw new Exception("Invalid file extension, only png, jpg and jpeg is allowed");
		}
	}
	
	private static boolean validateSize(MultipartFile file) {
		if(file.getSize()>10000000) {
			return false;
		}else {
		return true;}
	}
	private static boolean validateFileExtension(MultipartFile file) {
		String extension = FilenameUtils.getExtension(file.getOriginalFilename());
		List<String> allowedExtensions = new ArrayList<String>();
		allowedExtensions.add("png");
		allowedExtensions.add("jpg");
		allowedExtensions.add("jpeg");
		if(!allowedExtensions.contains(extension)) {
			return false;
		}else {
			return true;
		}
	}
}
