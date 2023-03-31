package com.imagecompare.app.service;

import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.imgcodecs.Imgcodecs;
import org.opencv.imgproc.Imgproc;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class CompareService {

	/*
	 * @Value("${baseImagePath}") private String baseImagePath;
	 * 
	 * @Value("${compareImagePath}") private String compareImagePath;
	 */
	@Value("${upload.dir}")
	private String uploadDir;

	private static final Logger logger = LoggerFactory.getLogger(CompareService.class);

	public String compareImage(String baseImageName, String compareImageName) {

		Mat img1 = Imgcodecs.imread(System.getProperty("user.dir") + uploadDir + baseImageName);
		Mat img2 = Imgcodecs.imread(System.getProperty("user.dir") + uploadDir + compareImageName);

		// Resize the images to the same size (optional)
		Imgproc.resize(img1, img1, img2.size());

		// Compare the two images
		Mat diff = new Mat();
		Core.absdiff(img1, img2, diff);

		// Convert the difference image to grayscale
		Imgproc.cvtColor(diff, diff, Imgproc.COLOR_BGR2GRAY);

		// Count the number of non-zero pixels (pixels that are different)

		Imgproc.threshold(diff, diff, 30, 255, Imgproc.THRESH_BINARY);
		int nonZeroPixels = Core.countNonZero(diff);
		double coincidencePercentage = Math.floor((1 - nonZeroPixels / img2.size().area()) * 100 * 100) / 100;
		if (nonZeroPixels == 0) {
			logger.info("Comparison of images: " + baseImageName + " and " + compareImageName + " done successfully");
			return "{\"result\": \"With a coincidence of " + coincidencePercentage + "%"
					+ " It seems that both images are the same!\"}";
		} else {
			logger.info("Comparison of images: " + baseImageName + " and " + compareImageName + " done successfully");
			return "{\"result\": \"With a difference of " + Math.floor((100 - coincidencePercentage) * 1000) / 1000
					+ "%" + " It seems that images are not the same\"}";
		}
	}
}