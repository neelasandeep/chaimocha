describe('protractor start', () => {
    it('open angular website', () => {
  
      browser.get('https://juliemr.github.io/protractor-demo/');
      element(by.model('first')).sendKeys("5");
      element(by.model('second')).sendKeys("5");
      element(by.id('gobutton')).click();
      element(by.binding('latest')).getText().then((text)=>{console.log(text)});


      
      
      
  
    });
  });