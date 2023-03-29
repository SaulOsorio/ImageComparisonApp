package com.imagecompare.app.service;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.apache.commons.io.FilenameUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.imagecompare.app.validator.FileValidator;

@Service
public class UploadService {
	 @Value("${upload.dir}")
	 private String uploadDir;
	 
	 private static final Logger logger = LoggerFactory.getLogger(UploadService.class);
	 
	 public String saveImage(MultipartFile file, String name) throws Exception {
		 
		 	FileValidator.validateFile(file);
		 	Path uploadPath = Paths.get(System.getProperty("user.dir")+uploadDir);
	        FileValidator.validateFile(file);
	        if (!Files.exists(uploadPath)) {
	            Files.createDirectories(uploadPath);
	        }
	        String filename = name + "." + FilenameUtils.getExtension(file.getOriginalFilename());
	        Path filePath = uploadPath.resolve(filename);

	        try (InputStream inputStream = file.getInputStream()) {
	            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
	        }
	        logger.info("Images uploaded to: " + uploadPath);
	        return filename;
	    }
}
