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
        Mat baseImage = Imgcodecs.imread(System.getProperty("user.dir")+baseImagePath);
        Mat compareImage = Imgcodecs.imread(System.getProperty("user.dir")+compareImagePath);
        Mat difference = new Mat();
        
        Imgproc.cvtColor(baseImage, baseImage, Imgproc.COLOR_BGR2GRAY);
        Imgproc.cvtColor(compareImage, compareImage, Imgproc.COLOR_BGR2GRAY);

        Core.compare(baseImage, compareImage, difference, Core.CMP_NE);

        if (baseImage.size().equals(compareImage.size())) {
            Mat diff = new Mat();
            Core.absdiff(baseImage, compareImage, diff);
            double mse = Core.mean(diff.mul(diff)).val[0];

            if (mse == 0) {
                return "The images are the same.";
            } else {
                return "The images are different.";
            }
        } else {
        		return "The images have different sizes.";
        }
}
}