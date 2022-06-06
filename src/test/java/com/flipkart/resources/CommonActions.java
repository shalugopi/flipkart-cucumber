package com.flipkart.resources;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class CommonActions {
public static WebDriver driver;
	
	public void launch(String url) {
		WebDriverManager.chromedriver().setup();
		 driver=new ChromeDriver();
	driver.get(url);
	driver.manage().window().maximize();
	}
	public void insertclick(WebElement ele){
		ele.click();
	}
	public void insertTxt(WebElement ele,String s) {
		ele.sendKeys(s);
	}
	public void window() {
		
		Set<String> allwin=((WebDriver) driver).getWindowHandles();
		List<String> l=new ArrayList<String>();
			l.addAll(allwin);
			driver.switchTo().window(l.get(1));
	}
	public void screenshot(String name) throws IOException {
		TakesScreenshot t=(TakesScreenshot)driver;
		File source=t.getScreenshotAs(OutputType.FILE);
		File target=new File("D:\\java code\\flipkart-cucumber\\screenshot\\"+name+".png");
		FileUtils.copyFile(source, target);	
	}
	public void scrolldown(WebElement ele) {
		JavascriptExecutor j=(JavascriptExecutor)driver;
		j.executeScript("arguments[0].scrollIntoView(true)",ele);

		
	}

}
