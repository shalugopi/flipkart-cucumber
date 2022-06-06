package com.flipkart.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.flipkart.resources.CommonActions;

public class MobilePaage extends CommonActions {
	public MobilePaage() {
		
PageFactory.initElements (driver, this);
}
@FindBy(name="q")
private WebElement searchbar;

@FindBy(xpath="//button[text()='✕']")

private WebElement closeicon;

@FindBy(xpath="//div[text()='Highlights']")

private WebElement clickhighlight;

public WebElement getSearchbar() {
	return searchbar;
}

public WebElement getCloseicon() {
	return closeicon;
}

public WebElement getClickhighlight() {
	return clickhighlight;
}


}
