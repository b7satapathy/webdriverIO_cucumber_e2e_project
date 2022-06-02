import { Given, When, Then } from "@wdio/cucumber-framework";
import chai, { assert } from "chai";

/**
 *  Advance Web Interactions :
 */

Given(/^login to inventory web app$/, async function () {
  /**Open to inventory app */
  await browser.url("https://www.saucedemo.com/");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
  //console.log(await browser.getUrl());
  //chai.expect(homepage).to.equal(await browser.getUrl());

  /**Login */
  const username = await $("#user-name");
  const password = await $("#password");
  const loginButton = await $("#login-button");

  await username.setValue("standard_user");
  await password.setValue("secret_sauce");
  await loginButton.click();
});

Then(/^Inventory page should list (.*)$/, async function (NumberOfProduct) {
  if (!NumberOfProduct)
    throw Error(`Invalid number provided: ${NumberOfProduct}`);
  let listOfProducts = await $$(".inventory_item");
  chai.expect(listOfProducts.length).to.equal(parseInt(NumberOfProduct));
});

Then(/^validate all products have valid price$/, async function () {
  //get the list of prices and store in an array and assert if they are greater than zero
  let listOfPrices = await $$(".inventory_item_price");
  let priceInNumbers = [];
  for (let i = 0; i < listOfPrices.length; i++) {
    let values = listOfPrices[i].getText();
    let trimmedValues = parseInt((await values).replace("$", ""));
    priceInNumbers.push(trimmedValues);
    chai.expect(priceInNumbers[i]).to.greaterThan(0);
  }
  //console.log(...priceInNumbers);
  // await browser.back();
  // console.log(await browser.getUrl());
  // chai.expect(homepage).to.equal(await browser.getUrl());
});
