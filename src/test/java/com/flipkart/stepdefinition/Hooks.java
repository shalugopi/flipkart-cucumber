package com.flipkart.stepdefinition;

import com.flipkart.resources.CommonActions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends CommonActions {
	CommonActions c=new CommonActions();
@Before
public void beforeScenario() {
	System.out.println("Before each scenario ex: Browser laaunch");
	c.launch("https://www.flipkart.com/");
}
@After
public void afterScenario() {
	System.out.println("After each scenario ex: Browser laaunch");
	driver.quit();
}
}