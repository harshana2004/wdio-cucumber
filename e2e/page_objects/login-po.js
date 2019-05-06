const page =require('./page');

class WDIOLoginPage extends page {

    /**
    * define elements
    */
    get btnStartButton() { return browser.element('a.getstarted.button'); } 
    get txtDevGuideTitle() { return browser.element('h1#Developer-Guide'); }  

    get UsernameInput() { return browser.element('//*[@name="userName"]'); }
    get PasswordInput() { return browser.element('//*[@name="password"]'); }
    get SigninClicks() { return browser.element('//*[@name="login"]'); }
    get PageTitleChecked() {return browser.getTitle}

    
    /* Navigate to wdio home page */
    openHomePage() {
        browser.url('/');
    }
    /* Click webdriverio get start button */
    clickStart() {
        this.btnStartButton.scroll();
        this.btnStartButton.click();
    }
    /* Developer guide title */
    getDevGuideTitle() {
        this.txtDevGuideTitle.isVisible();
        console.log(this.txtDevGuideTitle.getText());
        return this.txtDevGuideTitle.getText();
    }
    /* Overwrite page method */
    openPage() {
        super.open('http://newtours.demoaut.com/')
        browser.pause(5000);
    }

    waitForloginPageToLoad () {
        if(!this.PasswordInput.isVisible()){
          this.PasswordInput.waitForVisible(5000);
        }
      }

    login(Username, Password) {
        this.waitForloginPageToLoad();
        this.UsernameInput.setValue(Username);
        this.PasswordInput.setValue(Password);
        this.SigninClicks.click();
        browser.pause(2000);
    }

    HomeTitle()
    {
        this.PageTitleChecked();
        browser.pause(2000);
    }

}
module.exports=new WDIOLoginPage()