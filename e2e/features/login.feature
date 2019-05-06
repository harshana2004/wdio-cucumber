Feature: Login

    Scenario:Verify whether user should be able to access webdriverio home page
        Given I navigates to home page
        When I clicks 'GET STARTED' button
        Then I can view 'page title' as:
            | Page_title      |
            | DEVELOPER GUIDE |



    Scenario:Verify whether user should be able to login to mecury tour home page
        Given I navigates to Mecury Tours page
        # When I enters username and password <Username> <Password>
        When I enters username as "admin" and password as "admin123"
        # When I enters username as "admin" and password as "admin123"
        # And I clicks 'sign_in' button
        Then I navigates to 'home' page

        # Examples:
        #     | Username | Password |
        #     | admin    | admin123 |
