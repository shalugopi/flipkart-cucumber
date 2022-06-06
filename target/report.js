$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/mobbille.feature");
formatter.feature({
  "name": "mobile purchase  vaalidation",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchase.user_launches_flipkart_application()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class com.flipkart.stepdefinition.MobilePurchase\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 33 more\r\nCaused by: java.lang.NoClassDefFoundError: org/openqa/selenium/internal/Locatable\r\n\tat org.openqa.selenium.support.pagefactory.DefaultFieldDecorator.proxyForLocator(DefaultFieldDecorator.java:101)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultFieldDecorator.decorate(DefaultFieldDecorator.java:62)\r\n\tat org.openqa.selenium.support.PageFactory.proxyFields(PageFactory.java:113)\r\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:105)\r\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:92)\r\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:79)\r\n\tat com.flipkart.objectrepository.MobilePaage.\u003cinit\u003e(MobilePaage.java:12)\r\n\tat com.flipkart.stepdefinition.MobilePurchase.\u003cinit\u003e(MobilePurchase.java:21)\r\n\t... 38 more\r\nCaused by: java.lang.ClassNotFoundException: org.openqa.selenium.internal.Locatable\r\n\tat java.net.URLClassLoader.findClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\t... 46 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User login flipkart by using credentials",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_login_flipkart_by_using_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "mobile purchaase",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User search mobiles",
  "keyword": "When "
});
formatter.match({
  "location": "MobilePurchase.user_search_mobiles()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select the mobile",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_select_the_mobile()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User navigates into new window",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_navigates_into_new_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user takes screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchase.user_takes_screenshot()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});