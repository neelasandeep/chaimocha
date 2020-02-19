describe('protractor start', () => {
    it('open angular website', () => {
    browser.waitForAngularEnabled(false);
   // browser.driver.manage().window().maximize();
    browser.get('https://www.rahulshettyacademy.com/AutomationPractice/');
   browser.switchTo().frame(element(by.id('courses-iframe')).getWebElement());
   element(by.css("a[href*='sign_in']")).getText().then((text)=>{
            console.log(text);
   });
   browser.switchTo().defaultContent();
   element(by.id('confirmbtn')).click();
   browser.switchTo().alert().accept().then(()=>{
       console.log('hey');
       browser.sleep(3000);
   });
      
      
  
    });
  });