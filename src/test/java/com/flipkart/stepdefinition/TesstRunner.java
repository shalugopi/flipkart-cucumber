package com.flipkart.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src//test//resources",
glue="com.flipkart.stepdefinition",
plugin="html:target",
monochrome=true)
public class TesstRunner {

}
