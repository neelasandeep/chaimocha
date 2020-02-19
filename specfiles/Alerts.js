describe('protractor start', () => {
 
    it('open angular website', () => {
        browser.waitForAngularEnabled(false);
  
      browser.get('https://www.rahulshettyacademy.com/AutomationPractice/');
    
      element(by.id('confirmbtn')).click();
      browser.switchTo().alert().accept().then(()=>{
          browser.sleep(3000);
      });
      element(by.id('confirmbtn')).click();
      browser.switchTo().alert().dismiss().then(()=>{
          browser.sleep(3000);
      });
      
      
  
    });
  });