package com.flipkart.stepdefinition;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.flipkart.objectrepository.MobilePaage;
import com.flipkart.resources.CommonActions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MobilePurchase extends CommonActions {

static String Name;
	CommonActions c =new CommonActions();
	MobilePaage m =new MobilePaage();

	@Given("User launches flipkart application")
	public void user_launches_flipkart_application() {
	}

	@Given("User login flipkart by using credentials")
	public void user_login_flipkart_by_using_credentials() {
		c.insertclick(m.getCloseicon());
	}

	@When("User search mobiles")
	public void user_search_mobiles() {
		Name="realme";
		c.insertTxt(m.getSearchbar(), Name);
	}

	@When("user select the mobile")
	public void user_select_the_mobile() {
		WebElement searchclk=driver.findElement(By.xpath("//button[@type='submit']"));
		c.insertclick(searchclk);
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);

				WebElement excelname=driver.findElement(By.xpath("(//div[contains(text(),'"+Name+"')])[1]"));
				String name2=excelname.getText();

	}
	static String name2;

	@Then("User navigates into new window")
	public void user_navigates_into_new_window() {
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		WebElement realmeclick=driver.findElement(By.xpath("(//div[contains(text(),'"+Name+"')])[1]"));
		realmeclick.click();
		String name1=realmeclick.getText();
			c.window();
	Assert.assertEquals(name2,name1);   
	}

	@Then("user takes screenshot")
	public void user_takes_screenshot() throws IOException {
c.screenshot("report1");
		
		c.scrolldown(m.getClickhighlight());
		c.screenshot("report2");
	}


}
