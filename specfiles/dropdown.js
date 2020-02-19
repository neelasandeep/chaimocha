let result = element(by.css("h2[class='ng-binding']"));
describe('protractor start', () => {

    const calc = (a, b, c) => {
        element(by.css("input[ng-model='first']")).sendKeys(a);

        element(by.css("input[ng-model='second']")).sendKeys(b);
        element(by.model('operator')).all(by.tagName('option'))
            .each((items) => {
                items.getText().then((text) => {
                    if (text === c) {
                        items.click();
                    }
                });
            });

        element(by.css("button[id='gobutton']")).click();
    }

    it('open angular website', () => {

        browser.get('https://juliemr.github.io/protractor-demo/');
        // browser.driver.manage().window().maximize();
        calc(2, 3, '*');
        calc(8, 2, '/');
        calc(8, 11, '+');
        element.all(by.repeater('result in memory'))
            .each((items) => {
                items.element(by.css("td:nth-child(3)"))
                    .getText()
                    .then((text) => {
                        console.log(text);
                    });

            });

    });
});