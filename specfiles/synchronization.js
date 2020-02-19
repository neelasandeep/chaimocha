describe('protractor start', () => {
    it('open angular website', () => {
        browser.waitForAngularEnabled(false);
      browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');
    element(by.css("a[href*='loadAjax']")).click();
    let Ec=protractor.ExpectedConditions;
    browser.wait(Ec.invisibilityOf(element(by.id('loader'))),8000)
     element(by.id('results')).getText().then((text)=>{
         console.log(text);
     });
      
      
  
    });
  });