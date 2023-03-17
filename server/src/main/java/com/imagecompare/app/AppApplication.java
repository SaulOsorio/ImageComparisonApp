package com.imagecompare.app;



import org.opencv.core.Core;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AppApplication {
	public static void main(String[] args) {
		System.setProperty("java.library.path", System.getProperty("user.dir")+
					"\\src\\main\\resources\\opencv\\build\\java\\x64\\");
		String libraryPath = System.getProperty("user.dir")+
				"\\src\\main\\resources\\opencv\\build\\java\\x64\\opencv_java470.dll"; // replace with actual path to library file
		System.load(libraryPath);
		SpringApplication.run(AppApplication.class, args);
	}
}