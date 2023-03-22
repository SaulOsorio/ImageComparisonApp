package com.imagecompare.app.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.imagecompare.app.model.Names;
import com.imagecompare.app.service.UploadService;

@RestController
public class UploadController {
	
	
	@Autowired
    private UploadService uploadService;
	@PostMapping("/upload")
    public String uploadImages(@RequestParam("file1") MultipartFile baseImage,
                               @RequestParam("file2") MultipartFile compareImage) {
        try {
            String baseImageUpload = uploadService.saveImage(baseImage, "baseImage");
            Names.setBaseImageName(baseImageUpload);
            String compareImageUpload = uploadService.saveImage(compareImage, "compareImage");
            Names.setCompareImageName(compareImageUpload);
            return "Files uploaded successfully with names: "+ baseImageUpload + " and "+ compareImageUpload;
        } catch (IOException e) {
            e.printStackTrace();
            return "Error uploading files";
        }
    }
}