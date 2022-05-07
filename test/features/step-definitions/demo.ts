import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

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
 *  Web Interactions
 */

Given(/^A web page is opened$/, async function () {
  await browser.url("/inputs");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  //await browser.maximizeWindow();
});

When(/^Perform web interactions$/, async function () {
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

  let num = 12345;
  let inputNum = num.toString();

  await ele.click();

  for (let i = 0; i < inputNum.length; i++) {
    await browser.pause(2000);
    await browser.keys(inputNum[i]);
    // simulating slow user typing
  }
});
