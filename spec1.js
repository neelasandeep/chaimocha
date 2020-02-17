describe('protractor start', () => {
  it('open angular website', () => {

    browser.get('https://juliemr.github.io/protractor-demo/');
    browser.driver.manage().window().maximize();
    element(by.model('first')).sendKeys('2');

    element(by.model('second')).sendKeys('3')
      element(by.id("gobutton")).click();
    
    

  });
});