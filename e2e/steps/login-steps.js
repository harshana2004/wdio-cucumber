const { Given,When,Then }=require('cucumber');
const loginpage =require('../page_objects/login-po');

    // // // *** belong to demo login feature
    // Given(/^I navigates to 'Mecury Tours' page$/, function () {
    //     demologinpage.openPage();   // navigating to login page
    // });
    Given('I navigates to home page', () => {
        loginpage.openHomePage();
    });

    When('I clicks \'GET STARTED\' button', () => {
        loginpage.clickStart();
    });

    Then('I can view \'page title\' as:', table => {
        const pageHeading = table.rows()[0][0];
        global.assert.equal(loginpage.getDevGuideTitle(),pageHeading,'Page heading is matched');
    });

    Given('I navigates to Mecury Tours page', () => {
        loginpage.openPage();
    });

    // // *** belongs to demo login feature
    When(/^I enters username as "([^"]*)" and password as "([^"]*)"$/, (username, password) => {
        loginpage.login(username, password)    // entering user name, password and and submiting the page
    });
    

    // *** belongs to demo login feature
    Then(/^I navigates to 'home' page "([^"]*)"$/, (message) => {
        loginpage.getPageTitle().should.equal(message);
    });
    
   