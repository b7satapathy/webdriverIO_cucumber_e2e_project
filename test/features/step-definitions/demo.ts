import { Given, When, Then } from "@wdio/cucumber-framework";
import chai, { assert } from "chai";

Given(/^Google page is opened$/, async function () {
  console.log(`Before Opening the browser..`);
  await browser.url("https://www.google.com");
  await browser.pause(3000);
  console.log(`After Opening the browser..`);
});

When(/^Search with (.*)$/, async function (SearchItem) {
  console.log(`serach item : ${SearchItem}`);
  let searchBox = await $(`[name=q]`);
  await searchBox.setValue(SearchItem);
  await browser.keys("Enter");
});

Then(/^CLick on first search result$/, async function () {
  let firstSearchResult = await $(`<h3>`);
  //console.log(ele);
  firstSearchResult.click();
  console.log(`clicked on first search result`);
  await browser.pause(3000);
});

Then(/^URL should match (.*)$/, async function (ExpectedURL) {
  console.log(`ExpectedURL : ${ExpectedURL}`);
  let url = await browser.getUrl();
  chai.expect(url).to.equal(ExpectedURL);
});

/**
 *  Web Interactions : User Input
 */

Given(/^A web page is opened$/, async function () {
  await browser.url("");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  //await browser.maximizeWindow();
});

When(
  /^scroll down to inputs and then wait and then click on it$/,
  async function () {
    let ele = await $("=Inputs");
    await ele.scrollIntoView();
    await browser.pause(3000);
    await ele.click();
  }
);

Then(/^verify the url (.*)$/, async function (expectedUrl) {
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedUrl);
});

Then(
  /^slowtype inside user input (.*) and verify input$/,
  async function (input) {
    /**
     * 1- input box
     * Actions :
     * 1- type into input box
     * 2- clear the field and type or just addvalue
     * 3- click and type
     * 4- slow typing
     */

    let ele = await $(`[type=number]`);
    //await ele.setValue("12345");
    //await browser.debug();
    //await ele.addValue("12345");

    await ele.click();

    for (let i = 0; i < input.length; i++) {
      await browser.pause(2000);
      await browser.keys(input[i]);
      // simulating slow user typing
    }

    console.log(await ele.getValue());
    chai.expect(input).to.equal(await ele.getValue());
  }
);

Then(/^navigate back to home screen (.*)$/, async function (homeUrl) {
  await browser.back();
  chai.expect(homeUrl).to.equal(await browser.getUrl());
});

/**
 * Web Interaction : User Input
 * 1- Assert default option is selected
 * 2- Select by attribute, text, index
 * 3- Get a list of options
 */

Given(/^user is on the (.*)$/, async function (homepage) {
  await browser.url("");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
});

When(
  /^scroll down to dropdown button and then wait and then click on it$/,
  async function () {
    let dropdownButton = await $("=Dropdown");
    await dropdownButton.scrollIntoView();
    await browser.pause(2000);
    await dropdownButton.click();
  }
);

// Then(/^verify user navigated to (.*)$/, async function (dropdownPageUrl) {
//   //let pageUrl = await browser.getUrl();
//   //await browser.pause(2000);
//   console.log(await browser.getUrl());
//   //chai.expect(pageUrl).to.equal(dropdownPageUrl);
// });

Then(
  /^click on the dropdown and select second option and verify (.*)$/,
  async function (selectedValue) {
    //get the list of options using xpath
    //let listOfEleArr = await $$("//select/option");

    //get the list of options using CSS Selector
    let listOfEleArr = await $$(`select > option`);
    let arr = [];
    for (let i = 0; i < listOfEleArr.length; i++) {
      arr.push(await listOfEleArr[i].getText());
    }

    console.log(arr);

    //check if default option is selected
    let selectedEle = await $('//select/option[@selected="selected"]');
    let defaultVal = await selectedEle.getText();
    chai.expect(defaultVal).to.equal("Please select an option");

    //select a specific option i.e second dropdown
    let dropdownEle = await $("#dropdown");
    await dropdownEle.selectByVisibleText("Option 2");

    // select by attribute and index
    //await dropdownEle.selectByAttribute("value", "2");
    //await dropdownEle.selectByIndex(2);

    //console.log(arr.includes(selectedValue));
    //chai.expect(arr[2]).to.equal(selectedValue);
  }
);

Then(/^navigate back to home screen (.*)$/, async function (homepage) {
  await browser.back();
  chai.expect(homepage).to.equal(await browser.getUrl());
});
