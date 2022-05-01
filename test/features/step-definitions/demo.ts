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
