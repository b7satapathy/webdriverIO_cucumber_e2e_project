Feature: Web interactions

    @demo
    Scenario Outline: Demo web interactions , User Iput
        Given A web page is opened
        When scroll down to inputs and then wait and then click on it
        Then verify the url <expectedUrl>
        Then slowtype inside user input <input> and verify input
        Then navigate back to home screen <homeUrl>

        Examples:
            | TestID    | expectedUrl                               | input | homeUrl                             |
            | WEB_TC002 | https://the-internet.herokuapp.com/inputs | 12345 | https://the-internet.herokuapp.com/ |