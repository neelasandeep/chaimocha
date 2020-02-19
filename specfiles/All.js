let result=element(by.css("h2[class='ng-binding']"));
describe('protractor start', () => {

const add=(a,b)=>{
    element(by.css("input[ng-model='first']")).sendKeys(a);

    element(by.css("input[ng-model='second']")).sendKeys(b)
      element(by.css("button[id='gobutton']")).click();
}

  it('open angular website', () => {

    browser.get('https://juliemr.github.io/protractor-demo/');
   // browser.driver.manage().window().maximize();
    add(2,3);
    add(8,2);
    add(8,11);

      element.all(by.repeater('result in memory'))
                    .each((items)=>{
                        items.element(by.css("td:nth-child(3)"))
                        .getText()
                        .then((text)=>{
                            console.log(text);
                        });

      });
      /* element.all(by.repeater('result in memory'))
                        .first().element(by.css("td:nth-child(3)"))
                        .getText()
                        .then((text)=>{
                            console.log(text);

                        });
        element.all(by.repeater('result in memory'))
        .last().element(by.css("td:nth-child(3)"))
        .getText()
        .then((text)=>{
            console.log(text);

        });
        element.all(by.repeater('result in memory'))
        .get(1).element(by.css("td:nth-child(3)"))
        .getText()
        .then((text)=>{
            console.log(text);

        }); */
                        
                        
    });
});