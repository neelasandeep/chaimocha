let result=element(by.css("h2[class='ng-binding']"));
describe('protractor start', () => {
  it('open angular website', () => {

    browser.get('https://juliemr.github.io/protractor-demo/');
   // browser.driver.manage().window().maximize();
    element(by.css("input[ng-model='first']")).sendKeys('2');

    element(by.css("input[ng-model='second']")).sendKeys('3')
      element(by.css("button[id='gobutton']")).click();
     
      expect(result.getText()).toBe('5');
      element(by.repeater('result in memory'))
                    .element(by.css("td:nth-child(3)"))
                    .getText().then((text)=>{
                      console.log(text);
                    });
     element(by.model('operator'))
                    .element(by.css('option:nth-child(4)')).click()
                    .then(()=>{
                        console.log("hi");
                      
                    });
    
    
    

  });
});