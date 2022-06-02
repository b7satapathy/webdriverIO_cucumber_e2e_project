Feature: Advance Web interactions

    @demo
    Scenario Outline: web interactions , file upload
        Given login to inventory web app
        Then Inventory page should list <NumberOfProduct>
        Then validate all products have valid price

        Examples:
            | TestID    | NumberOfProduct |
            | WEB_TC201 | 6               |








