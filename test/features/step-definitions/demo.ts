import { Given, When, Then } from "@wdio/cucumber-framework";
import chai, { assert } from "chai";

// Given(/^Google page is opened$/, async function () {
//   console.log(`Before Opening the browser..`);
//   await browser.url("https://www.google.com");
//   await browser.pause(3000);
//   console.log(`After Opening the browser..`);
// });

// When(/^Search with (.*)$/, async function (SearchItem) {
//   console.log(`serach item : ${SearchItem}`);
//   let searchBox = await $(`[name=q]`);
//   await searchBox.setValue(SearchItem);
//   await browser.keys("Enter");
// });

// Then(/^CLick on first search result$/, async function () {
//   let firstSearchResult = await $(`<h3>`);
//   //console.log(ele);
//   firstSearchResult.click();
//   console.log(`clicked on first search result`);
//   await browser.pause(3000);
// });

// Then(/^URL should match (.*)$/, async function (ExpectedURL) {
//   console.log(`ExpectedURL : ${ExpectedURL}`);
//   let url = await browser.getUrl();
//   chai.expect(url).to.equal(ExpectedURL);
// });

// /**
//  *  Web Interactions : User Input
//  */

// Given(/^A web page is opened$/, async function () {
//   await browser.url("");
//   await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
//   //await browser.maximizeWindow();
// });

// When(
//   /^scroll down to inputs and then wait and then click on it$/,
//   async function () {
//     let ele = await $("=Inputs");
//     await ele.scrollIntoView();
//     await browser.pause(3000);
//     await ele.click();
//   }
// );

// Then(/^verify the url (.*)$/, async function (expectedUrl) {
//   let url = await browser.getUrl();
//   chai.expect(url).to.equal(expectedUrl);
// });

// Then(
//   /^slowtype inside user input (.*) and verify input$/,
//   async function (input) {
//     /**
//      * 1- input box
//      * Actions :
//      * 1- type into input box
//      * 2- clear the field and type or just addvalue
//      * 3- click and type
//      * 4- slow typing
//      */

//     let ele = await $(`[type=number]`);
//     //await ele.setValue("12345");
//     //await browser.debug();
//     //await ele.addValue("12345");

//     await ele.click();

//     for (let i = 0; i < input.length; i++) {
//       await browser.pause(2000);
//       await browser.keys(input[i]);
//       // simulating slow user typing
//     }

//     console.log(await ele.getValue());
//     chai.expect(input).to.equal(await ele.getValue());
//   }
// );

// Then(/^navigate back to home screen (.*)$/, async function (homeUrl) {
//   await browser.back();
//   chai.expect(homeUrl).to.equal(await browser.getUrl());
// });

// /**
//  * Web Interaction : User Input
//  * 1- Assert default option is selected
//  * 2- Select by attribute, text, index
//  * 3- Get a list of options
//  */

// Given(/^user is on the (.*)$/, async function (homepage) {
//   await browser.url("");
//   await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
// });

// When(
//   /^scroll down to dropdown button and then wait and then click on it$/,
//   async function () {
//     let dropdownButton = await $("=Dropdown");
//     await dropdownButton.scrollIntoView();
//     await browser.pause(2000);
//     await dropdownButton.click();
//   }
// );

// // Then(/^verify user navigated to (.*)$/, async function (dropdownPageUrl) {
// //   //let pageUrl = await browser.getUrl();
// //   //await browser.pause(2000);
// //   console.log(await browser.getUrl());
// //   //chai.expect(pageUrl).to.equal(dropdownPageUrl);
// // });

// Then(
//   /^click on the dropdown and select second option and verify (.*)$/,
//   async function (selectedValue) {
//     //get the list of options using xpath
//     //let listOfEleArr = await $$("//select/option");

//     //get the list of options using CSS Selector
//     let listOfEleArr = await $$(`select > option`);
//     let arr = [];
//     for (let i = 0; i < listOfEleArr.length; i++) {
//       arr.push(await listOfEleArr[i].getText());
//     }

//     console.log(arr);

//     //check if default option is selected
//     let selectedEle = await $('//select/option[@selected="selected"]');
//     let defaultVal = await selectedEle.getText();
//     chai.expect(defaultVal).to.equal("Please select an option");

//     //select a specific option i.e second dropdown
//     let dropdownEle = await $("#dropdown");
//     await dropdownEle.selectByVisibleText("Option 2");

//     // select by attribute and index
//     //await dropdownEle.selectByAttribute("value", "2");
//     //await dropdownEle.selectByIndex(2);

//     //console.log(arr.includes(selectedValue));
//     //chai.expect(arr[2]).to.equal(selectedValue);
//   }
// );

// Then(/^navigate back to home screen (.*)$/, async function (homepage) {
//   await browser.back();
//   chai.expect(homepage).to.equal(await browser.getUrl());
// });

/**
 * 3- Checkbox
 * Actions : ---------------------------------------
 *  1- Select an option
 *  2- Unselect an option (if selected)
 *  3- Assert if option is selected
 *  4- Select all options
 * ------------------------------------------
 */
// Given(/^user is on the (.*)$/, async function (homepage) {
//   await browser.url("");
//   await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
//   await browser.maximizeWindow();
//   console.log(await browser.getUrl());
//   chai.expect(homepage).to.equal(await browser.getUrl());
// });

// When(/^user clicks on checkbox option$/, async function () {
//   let checkboxLink = await $("=Checkboxes");
//   // await checkboxLink.scrollIntoView();
//   // await browser.pause(2000);
//   await checkboxLink.click();
// });

// Then(/^verify user redirected to (.*)$/, async function (checkbox_page) {
//   const checkbox_page_url = await browser.getUrl();
//   chai.expect(checkbox_page).to.equal(checkbox_page_url);
// });

// Then(/^user selects first checkbox$/, async function () {
//   const firstCheckBox = await $("//form[@id='checkboxes']/input[1]");
//   await firstCheckBox.click();
//   chai.expect(true).to.equal(await firstCheckBox.isSelected());
// });

// Then(/^user deselects first and second checkbox$/, async function () {
//   const firstCheckBox = await $("//form[@id='checkboxes']/input[1]");
//   const secondCheckBox = await $("//form[@id='checkboxes']/input[2]");
//   await firstCheckBox.click();
//   await secondCheckBox.click();
//   chai.expect(false).to.equal(await firstCheckBox.isSelected());
//   chai.expect(false).to.equal(await secondCheckBox.isSelected());
// });

// Then(/^user selects all checkboxes$/, async function () {
//   const checkBoxes = await $$("//form[@id='checkboxes']/input");
//   for (let i = 0; i < checkBoxes.length; i++) {
//     if (!(await checkBoxes[i].isSelected())) {
//       await checkBoxes[i].click();
//       chai.expect(true).to.equal(await checkBoxes[i].isSelected());
//     }
//   }
// });

// Then(/^user navigates back to (.*)$/, async function (homepage) {
//   await browser.back();
//   console.log(await browser.getUrl());
//   chai.expect(homepage).to.equal(await browser.getUrl());
// });

/**
 4- Window Handling 
    Steps: 
    i) launch the browser
    ii) open another window
    iii) switch to the window based on title
    iv) switch back to the main window
 */

Given(
  /^user is on (.*) and user clicks on Multiple Windows button$/,
  async function (homepage) {
    await browser.url("");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
    console.log(await browser.getUrl());
    chai.expect(homepage).to.equal(await browser.getUrl());
    const multipleWindowButton = await $("=Multiple Windows");
    await multipleWindowButton.scrollIntoView();
    await multipleWindowButton.click();
  }
);

When(
  /^user clicks on click here button and validate opened Window$/,
  async function () {
    const clickHereButton = await $("=Click Here");
    const elementalButton = await $("=Elemental Selenium");

    await clickHereButton.click();
    await elementalButton.click();

    const parentWindowTitle = await browser.getTitle();
    const parentWindowHandle = await browser.getWindowHandle();

    //get all window handles
    let windowHandles = await browser.getWindowHandles();
    const firstWindowTitle = "New Window";
    const firstWindowHeaderText = "New Window";
    const secondWindowHeaderText = "Elemental Selenium";
    const secondWIndowTitle =
      "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro";

    //switch to different windows
    for (let i = 0; i < windowHandles.length; i++) {
      //console.log(windowHandles[i]);
      console.log(await browser.getTitle());

      await browser.switchToWindow(windowHandles[i]);

      //console.log(await $(windowHandles[i]));
      console.log(await browser.getTitle());

      if ((await browser.getTitle()) === firstWindowTitle) {
        chai.expect(firstWindowHeaderText).to.equal(await $(`<h3>`).getText());
      }
      if ((await browser.getTitle()) === secondWIndowTitle) {
        chai.expect(secondWindowHeaderText).to.equal(await $(`<h1>`).getText());
      }
    }

    //switch back to parent window
    await browser.switchToWindow(parentWindowHandle);
    console.log(await browser.getTitle());
    chai.expect(parentWindowTitle).to.equal(await browser.getTitle());
  }
);

Then(/^user navigates back to (.*)$/, async function (homepage) {
  await browser.back();
  console.log(await browser.getUrl());
  chai.expect(homepage).to.equal(await browser.getUrl());
});
