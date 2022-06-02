import { Given, When, Then } from "@wdio/cucumber-framework";
import chai, { assert } from "chai";

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
     * 2- clear the field and type (Set Value) or just addvalue
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

/**
 * 3- Checkbox
 * Actions : ---------------------------------------
 *  1- Select an option
 *  2- Unselect an option (if selected)
 *  3- Assert if option is selected
 *  4- Select all options
 * ------------------------------------------
 */
Given(/^user is on the (.*)$/, async function (homepage) {
  await browser.url("");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
  console.log(await browser.getUrl());
  chai.expect(homepage).to.equal(await browser.getUrl());
});

When(/^user clicks on checkbox option$/, async function () {
  let checkboxLink = await $("=Checkboxes");
  // await checkboxLink.scrollIntoView();
  // await browser.pause(2000);
  await checkboxLink.click();
});

Then(/^verify user redirected to (.*)$/, async function (checkbox_page) {
  const checkbox_page_url = await browser.getUrl();
  chai.expect(checkbox_page).to.equal(checkbox_page_url);
});

Then(/^user selects first checkbox$/, async function () {
  const firstCheckBox = await $("//form[@id='checkboxes']/input[1]");
  await firstCheckBox.click();
  chai.expect(true).to.equal(await firstCheckBox.isSelected());
});

Then(/^user deselects first and second checkbox$/, async function () {
  const firstCheckBox = await $("//form[@id='checkboxes']/input[1]");
  const secondCheckBox = await $("//form[@id='checkboxes']/input[2]");
  await firstCheckBox.click();
  await secondCheckBox.click();
  chai.expect(false).to.equal(await firstCheckBox.isSelected());
  chai.expect(false).to.equal(await secondCheckBox.isSelected());
});

Then(/^user selects all checkboxes$/, async function () {
  const checkBoxes = await $$("//form[@id='checkboxes']/input");
  for (let i = 0; i < checkBoxes.length; i++) {
    if (!(await checkBoxes[i].isSelected())) {
      await checkBoxes[i].click();
      chai.expect(true).to.equal(await checkBoxes[i].isSelected());
    }
  }
});

Then(/^user navigates back to (.*)$/, async function (homepage) {
  await browser.back();
  console.log(await browser.getUrl());
  chai.expect(homepage).to.equal(await browser.getUrl());
});

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

/**
 * Handling Alerts
 *  1- isAlertOpen()
 *  2- acceptAlert()
 *  3- dismissAlert()
 *  4- getAlertText()
 *  5- sendAlertText()
 */

Given(
  /^user is on (.*) and scrolls down and clicks on JavsScript Alert button$/,
  async function (homepage) {
    await browser.url("");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
    console.log(await browser.getUrl());
    chai.expect(homepage).to.equal(await browser.getUrl());
    const jsAlertButton = await $("=JavaScript Alerts");
    await jsAlertButton.scrollIntoView();
    await jsAlertButton.click();
  }
);

When(/^user navigates to (.*)$/, async function (JSAlertPage) {
  chai.expect(JSAlertPage).to.equal(await browser.getUrl());
});

Then(/^verify JS Alert popup$/, async function () {
  const jsAlertBtn = await $("button=Click for JS Alert");
  await jsAlertBtn.click();
  if (await browser.isAlertOpen()) {
    await browser.acceptAlert();
  }
  const textAfterClickOK = await $(
    "p=You successfully clicked an alert"
  ).getText();
  chai.expect(textAfterClickOK).to.equal("You successfully clicked an alert");
});
Then(/^verify JS Confirm popup$/, async function () {
  const jsConfirmBtn = await $("button=Click for JS Confirm");
  await jsConfirmBtn.click();
  if (await browser.isAlertOpen()) {
    await browser.acceptAlert();
  }
  const textAfterClickOK = await $("p=You clicked: Ok").getText();
  chai.expect(textAfterClickOK).to.equal("You clicked: Ok");

  await jsConfirmBtn.click();
  if (await browser.isAlertOpen()) {
    await browser.dismissAlert();
  }
  const textAfterClickCancel = await $("p=You clicked: Cancel").getText();
  chai.expect(textAfterClickCancel).to.equal("You clicked: Cancel");
});
Then(/^verify JS Prompt popup$/, async function () {
  const jsPromptBtn = await $("button=Click for JS Prompt");
  await jsPromptBtn.click();
  if (await browser.isAlertOpen()) {
    let alertText = await browser.getAlertText();
    console.log(`Alert Text >> ${alertText}`);
    chai.expect(alertText).to.equal("I am a JS prompt");
    await browser.sendAlertText("Input text");
    await browser.acceptAlert();
    let textAfterPromtInput = await $("p=You entered: Input text").getText();
    chai.expect(textAfterPromtInput).to.equal("You entered: Input text");
  }
});
Then(
  /^user navigates back to (.*) and verify basic auth functionality$/,
  async function (homepage) {
    await browser.back();
    const homeUrl = await browser.getUrl();
    chai.expect(homepage).to.equal(homeUrl);
    //const basicAuthButton = await $("=Basic Auth");
    await browser.url(
      "https://admin:admin@the-internet.herokuapp.com/basic_auth"
    );
    const basicAuthSuccessText = await $(
      "p=Congratulations! You must have the proper credentials."
    ).getText();
    chai
      .expect(basicAuthSuccessText)
      .to.equal("Congratulations! You must have the proper credentials.");
  }
);

//File Uplaod

/*
Given user is on <homepage> and scrolls down and clicks on file upload button
        When user navigates to <fileUploadPage>
        Then verify fileUpload
        Then user navigates back to <homepage>
*/

Given(
  /^user is on (.*) and scrolls down and clicks on file upload button$/,
  async function (homepage) {
    await browser.url("");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
    console.log(await browser.getUrl());
    chai.expect(homepage).to.equal(await browser.getUrl());
    const fileUploadButton = await $("=File Upload");
    await fileUploadButton.scrollIntoView();
    await fileUploadButton.click();
  }
);

Then(/^verify fileUpload$/, async function () {
  const fileUploadBtn = await $("#file-upload");
  const submitButton = await $("#file-submit");
  // absolute path of project folder -> process.cwd()
  await fileUploadBtn.addValue(`${process.cwd()}/data/fileupload/dummy.txt`);
  await submitButton.click();
  const uploadedFileName = await $("#uploaded-files").getText();
  chai.expect(uploadedFileName).to.equal("dummy.txt");
});

Then(/^user navigates back to (.*)$/, async function (homepage) {
  await browser.back();
  await browser.back();
  console.log(await browser.getUrl());
  chai.expect(homepage).to.equal(await browser.getUrl());
});

//Frames
//Switch to frame
// Switch to parent frame

Given(
  /^user is on (.*) and scrolls down and clicks on frames button$/,
  async function (homepage) {
    await browser.url("");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
    console.log(await browser.getUrl());
    chai.expect(homepage).to.equal(await browser.getUrl());
    const framesButton = await $("=Frames");
    await framesButton.scrollIntoView();
    await framesButton.click();
  }
);

When(
  /^user clicks iframe button and redirects to (.*)$/,
  async function (iframePage) {
    const iframeButton = await $("=iFrame");
    await iframeButton.click();
    console.log(await browser.getUrl());
    chai.expect(iframePage).to.equal(await browser.getUrl());
  }
);
Then(
  /^switch to frames and input text and switch back to parent frame$/,
  async function () {
    const frameElement = await $("#mce_0_ifr");
    await browser.switchToFrame(frameElement);
    const inputBox = await $("#tinymce");
    await inputBox.setValue("Input text goes here");
    chai.expect(await inputBox.getText()).to.equal("Input text goes here");
    await inputBox.click();
    await browser.keys(["Control", "a"]);
    await browser.keys("Backspace");
    await inputBox.addValue("New Input Text");
    chai.expect(await inputBox.getText()).to.equal("New Input Text");
    await browser.switchToParentFrame();
    await browser.back();
    await browser.back();
    await browser.pause(2000);
    chai
      .expect("https://the-internet.herokuapp.com/")
      .to.equal(await browser.getUrl());
  }
);
