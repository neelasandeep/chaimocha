describe('protractor start', () => {
    it('open angular website', () => {
  
      browser.get("https://posse.com/");
      element(by.model('userInputQuery')).sendKeys('river');
      browser.actions().mouseMove(element(by.model('locationQuery'))
      
                                   .sendKeys('London') ).perform()
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
            .then(()=>{
                browser.sleep(4000);
                expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']"))
               .count()).toEqual(7);

               element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
               element(by.css("a[ng-href*='London/River Island']")).click().then(()=>{
                   browser.getAllWindowHandles().then((handles)=>{
                        browser.switchTo().window(handles[1]);
                        browser.getTitle().then((title)=>{
                            console.log(`${title} aftet switching`);
                        });
                        browser.seitchTo().window(handles[0]);
                        browser.getTitle().then((title)=>{
                            console.log(`${title} aftet switching to parent`);
                        });
                   });
               });
            });
                    
     
      
  
    });
  });