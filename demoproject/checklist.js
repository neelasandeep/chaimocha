describe('protractor start', () => {
    const add=(product)=>{
       let counter=0;
        element.all(by.tagName("app-card")).each((item)=>{
        
         
            item.element(by.css("h4[class='card-title'] a")).getText().then((text)=>{
                counter++;
                if(text==product){
                  
                        element.all(By.css("button[class*='btn-info']")).get(counter-1).click();
                        
                   
                    }
            });
          });
    }
    const checklist=()=>{ let result;
        element(by.partialLinkText("Checkout")).getText().then((text)=>{
            let text1=text.split("(");
             result=text1[1].trim().charAt(0);
           
              expect(text1[1].trim().charAt(0)).toBe(result);
             });
             return result;
    }

    const sumofAddedItems=(count)=>{
        let Total=0,total2=0;
        let temp=count;
    
        element.all(by.css("table[class*='table-hover'] tbody tr")).each((item)=>{
     
           if(temp>0){
           
            item.element(by.css("td:nth-child(4)")).getText().then((text)=>{
                
                let amount=text.split(" ")[1];
               Total+=Number(amount);
              
            });
            temp--;
        }
        });
        element.all(by.css("table[class*='table-hover'] tbody tr"))
        .get(count).element(by.css("td:nth-child(5)")).getText().then((text)=>{
                
            let amount=text.split(" ")[1];
            total2=Number(amount);
           
            expect(Total).toEqual(total2);
          
        });
      
       

    }
    const remove=(counter)=>{
       let count3=0;
        element.all(by.css("table[class*='table-hover'] tbody tr"))
        .get(0).element(by.css("td:nth-child(5) button")).click().then(()=>{
            
        });
         element.all(by.css("table[class*='table-hover'] tbody tr"))
        .count().then((x)=>{
          
            expect(x-2).toEqual(counter);
            
           
        });
      
    }
    it('open angular website', () => {
  
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        browser.driver.manage().window().maximize();
     element(by.linkText("Shop")).click()
      add("Samsung Note 8");
      add("iphone X");
      let re=checklist();
      element(by.partialLinkText("Checkout")).click().then(()=>{
        sumofAddedItems(2);     
        remove(1);
        
      });
        
    
             
     
    });

  });
  