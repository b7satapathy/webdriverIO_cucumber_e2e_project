Feature: Web interactions


    # Scenario Outline: Demo web interactions , User Iput
    #     Given A web page is opened
    #     When scroll down to inputs and then wait and then click on it
    #     Then verify the url <expectedUrl>
    #     Then slowtype inside user input <input> and verify input
    #     Then navigate back to home screen <homeUrl>

    #     Examples:
    #         | TestID      | WEB_TC002                                 |
    #         | expectedUrl | https://the-internet.herokuapp.com/inputs |
    #         | input       | 12345                                     |
    #         | homeUrl     | https://the-internet.herokuapp.com/       |


    # @demo
    # Scenario Outline: Demo web interactions , Dropdown
    #     Given user is on the <homepage>
    #     When scroll down to dropdown button and then wait and then click on it
    #     # Then verify user navigated to <dropdownPageUrl>
    #     Then click on the dropdown and select second option and verify <selectedValue>
    #     Then navigate back to home screen <homepage>

    #     Examples:
    #         | TestID          | WEB_TC003                                   |
    #         | homepage        | https://the-internet.herokuapp.com/         |
    #         | dropdownPageUrl | https://the-internet.herokuapp.com/dropdown |
    #         | selectedValue   | Option 2                                    |
    #         | homepage        | https://the-internet.herokuapp.com/         |

    # Scenario Outline: Demo web interactions , Checkbox
    #     Given user is on the <homepage>
    #     When user clicks on checkbox option
    #     Then verify user redirected to <checkbox_page>
    #     Then user selects first checkbox
    #     Then user deselects first and second checkbox
    #     Then user selects all checkboxes
    #     Then user navigates back to <homepage>

    #     Examples:
    #         | TestID    | homepage                            | checkbox_page                                 |
    #         | WEB_TC004 | https://the-internet.herokuapp.com/ | https://the-internet.herokuapp.com/checkboxes |


    @demo
    Scenario Outline: Demo web interactions , Checkbox
        Given user is on <homepage> and user clicks on Multiple Windows button
        When user clicks on click here button and validate opened Window
        Then user navigates back to <homepage>

        Examples:
            | TestID    | homepage                            |
            | WEB_TC005 | https://the-internet.herokuapp.com/ |