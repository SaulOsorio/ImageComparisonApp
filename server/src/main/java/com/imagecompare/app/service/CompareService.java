package com.imagecompare.app.service;

import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.imgcodecs.Imgcodecs;
import org.opencv.imgproc.Imgproc;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;



@Service
public class CompareService {
	
	 @Value("${baseImagePath}")
	 private String baseImagePath;
	 
	 @Value("${compareImagePath}")
	 private String compareImagePath;
	 
	public String compareImage() {
        Mat baseImage = Imgcodecs.imread(baseImagePath);
        Mat compareImage = Imgcodecs.imread(compareImagePath);
        Mat difference = new Mat();
        
        Imgproc.cvtColor(baseImage, baseImage, Imgproc.COLOR_BGR2GRAY);
        Imgproc.cvtColor(compareImage, compareImage, Imgproc.COLOR_BGR2GRAY);

        Core.compare(baseImage, compareImage, difference, Core.CMP_NE);

        if (Core.countNonZero(difference) == 0) {
            return "The images are the same.";
        } else {
            return "The images are not the same.";
        }
}
}