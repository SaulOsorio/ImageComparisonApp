package com.imagecompare.app.model;

public class Names {
	private static String baseImageName;
	private static String compareImageName;
	
	public static String getBaseImageName() {
		return baseImageName;
	}
	public static void setBaseImageName(String newBaseImageName) {
		baseImageName = newBaseImageName;
	}
	public static String getCompareImageName() {
		return compareImageName;
	}
	public static void setCompareImageName(String newCompareImageName) {
		compareImageName = newCompareImageName;
	}
	
	
}
