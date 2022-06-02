Feature: Web interactions


    Scenario Outline: web interactions , User Iput
        Given A web page is opened
        When scroll down to inputs and then wait and then click on it
        Then verify the url <expectedUrl>
        Then slowtype inside user input <input> and verify input
        Then navigate back to home screen <homeUrl>

        Examples:
            | TestID      | WEB_TC002                                 |
            | expectedUrl | https://the-internet.herokuapp.com/inputs |
            | input       | 12345                                     |
            | homeUrl     | https://the-internet.herokuapp.com/       |



    Scenario Outline: web interactions , Dropdown
        Given user is on the <homepage>
        When scroll down to dropdown button and then wait and then click on it
        # Then verify user navigated to <dropdownPageUrl>
        Then click on the dropdown and select second option and verify <selectedValue>
        Then navigate back to home screen <homepage>

        Examples:
            | TestID          | WEB_TC003                                   |
            | homepage        | https://the-internet.herokuapp.com/         |
            | dropdownPageUrl | https://the-internet.herokuapp.com/dropdown |
            | selectedValue   | Option 2                                    |
            | homepage        | https://the-internet.herokuapp.com/         |

    Scenario Outline: web interactions , Checkbox
        Given user is on the <homepage>
        When user clicks on checkbox option
        Then verify user redirected to <checkbox_page>
        Then user selects first checkbox
        Then user deselects first and second checkbox
        Then user selects all checkboxes
        Then user navigates back to <homepage>

        Examples:
            | TestID    | homepage                            | checkbox_page                                 |
            | WEB_TC004 | https://the-internet.herokuapp.com/ | https://the-internet.herokuapp.com/checkboxes |



    Scenario Outline: web interactions , Multiple Window
        Given user is on <homepage> and user clicks on Multiple Windows button
        When user clicks on click here button and validate opened Window
        Then user navigates back to <homepage>

        Examples:
            | TestID    | homepage                            |
            | WEB_TC005 | https://the-internet.herokuapp.com/ |

    Scenario Outline: web interactions , handling JS Alerts & Authentication
        Given user is on <homepage> and scrolls down and clicks on JavsScript Alert button
        When user navigates to <JSAlertPage>
        Then verify JS Alert popup
        Then verify JS Confirm popup
        Then verify JS Prompt popup
        Then user navigates back to <homepage> and verify basic auth functionality

        Examples:
            | TestID    | homepage                            | JSAlertPage                                          |
            | WEB_TC005 | https://the-internet.herokuapp.com/ | https://the-internet.herokuapp.com/javascript_alerts |

    Scenario Outline: web interactions , file upload
        Given user is on <homepage> and scrolls down and clicks on file upload button
        Then verify fileUpload
        Then user navigates back to <homepage>

        Examples:
            | TestID    | homepage                            |
            | WEB_TC006 | https://the-internet.herokuapp.com/ |


    Scenario Outline: web interactions , iFrames & key Press
        Given user is on <homepage> and scrolls down and clicks on frames button
        When user clicks iframe button and redirects to <iframePage>
        Then switch to frames and input text and switch back to parent frame

        Examples:
            | TestID    | homepage                            | iframePage                                |
            | WEB_TC006 | https://the-internet.herokuapp.com/ | https://the-internet.herokuapp.com/iframe |










