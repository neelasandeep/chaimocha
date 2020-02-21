describe('protractor start', () => {
    it('open angular website', () => {
  
      browser.get('https://qaclickacademy.github.io/protocommerce/');
      element.all(by.name("name")).get(0).sendKeys("sandeep");
       element(by.css("input[name='email']")).sendKeys("xyz@gmail.com");
      element(by.id("exampleInputPassword1")).sendKeys("sandeep");
       element(by.css("input[type='checkbox']")).click();
     element(by.id('exampleFormControlSelect1'))
                   .element(by.css('option:nth-child(1)')).click();
    //   //alternative for dropdown
    // element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
      element.all(by.name("inlineRadioOptions")).get(0).click();
       element(by.buttonText('Submit')).click().then(()=>{
           element(by.css("div[class*='success']")).getText().then((text)=>{
               console.log(text);
           });
       });  
       element.all(by.name("name")).get(0).clear();
       element.all(by.name("name")).get(0).sendKeys("s").then(()=>{
           element(by.css("[class='alert alert-danger'")).getText().then((text)=>{
                console.log(text);
           });
       });
       element(by.linkText("Shop")).click().then(()=>{
        browser.sleep(2000);
    });
      
      
  
    });
  });