package com.imagecompare.app.service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class UploadService {
	 @Value("${upload.dir}")
	 private String uploadDir;
	 

	 public String saveImage(MultipartFile file, String name) throws IOException {
	        
		 	Path uploadPath = Paths.get(uploadDir);
	        
	        if (!Files.exists(uploadPath)) {
	            Files.createDirectories(uploadPath);
	        }
	        
	        String filename = name + "." + FilenameUtils.getExtension(file.getOriginalFilename());
	        Path filePath = uploadPath.resolve(filename);

	        try (InputStream inputStream = file.getInputStream()) {
	            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
	        }
	        return filename;
	    }
}
