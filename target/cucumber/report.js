$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Amazonautomation.feature");
formatter.feature({
  "line": 1,
  "name": "Automate Amazon process",
  "description": "",
  "id": "automate-amazon-process",
  "keyword": "Feature"
});
formatter.before({
  "duration": 103900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To add phone in cart",
  "description": "",
  "id": "automate-amazon-process;to-add-phone-in-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@MobileWeb"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Amazon is open on \"Mobile browser\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#Then The user sets his US delivery zip code to \"90201\""
    }
  ],
  "line": 22,
  "name": "User searches for \"Apple iPhone 11 pro max\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user then looks for variants locked to the carrier \"Simple Mobile\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verifies whether following options are available as options in the search results page 1",
  "rows": [
    {
      "cells": [
        "White"
      ],
      "line": 25
    },
    {
      "cells": [
        "Midnight Green"
      ],
      "line": 26
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Select option \"Midnight Green\" if present",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user adds the product to the cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile browser",
      "offset": 19
    }
  ],
  "location": "StepDefinitionWeb.amazon_is_open_on_something(String)"
});
formatter.write("Starting execution on Mobile Web Browser");
formatter.result({
  "duration": 30000176200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPhone 11 pro max",
      "offset": 19
    }
  ],
  "location": "StepDefinitionWeb.user_searches_for(String)"
});
formatter.result({
  "duration": 3291981000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Simple Mobile",
      "offset": 52
    }
  ],
  "location": "StepDefinitionWeb.user_then_looks_for_variants_locked_to_the_carrier_something(String)"
});
formatter.result({
  "duration": 72893700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionWeb.verifies_whether_following_options_are_available_as_options_in_the_search_results_page_1(DataTable)"
});
formatter.result({
  "duration": 8879700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Green",
      "offset": 15
    }
  ],
  "location": "StepDefinitionWeb.select_option_something_if_present(String)"
});
formatter.result({
  "duration": 112754800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//android.view.View[contains(text(),\u0027Midnight Green\u0027)]/parent::a\"}\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-1U1E8K1P\u0027, ip: \u0027192.168.43.128\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.google.android.apps.chr..., appPackage: com.android.chrome, browserName: Chrome, databaseEnabled: false, desired: {browserName: Chrome, deviceName: OnePlus 5T, noReset: true, platformName: android, platformVersion: 10.0.0, udid: 31d57fcf}, deviceApiLevel: 29, deviceManufacturer: OnePlus, deviceModel: ONEPLUS A5010, deviceName: 31d57fcf, deviceScreenDensity: 420, deviceScreenSize: 1080x2160, deviceUDID: 31d57fcf, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, noReset: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 10, statBarHeight: 63, takesScreenshot: true, udid: 31d57fcf, viewportRect: {height: 2055, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 8717603d-8999-4daf-b534-b22005f3b3e1\n*** Element info: {Using\u003dxpath, value\u003d//android.view.View[contains(text(),\u0027Midnight Green\u0027)]/parent::a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat pageobjects.MobileSearchPage.selectColour(MobileSearchPage.java:41)\r\n\tat stepdefinitions.StepDefinitionWeb.select_option_something_if_present(StepDefinitionWeb.java:135)\r\n\tat ✽.And Select option \"Midnight Green\" if present(Amazonautomation.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitionWeb.user_adds_the_product_to_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 556214200,
  "status": "passed"
});
});