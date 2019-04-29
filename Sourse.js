'use strict';

let money=+prompt("Ваш бюджет на месяц?",''),
    time=prompt("Введите дату в формате YYYY-MM-DD",'');
let  appData={
    b:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
};


appData.ra=appData.b/30;
/*
for(let i=0; i < 2; i++) {
let    a=prompt("Введите обязательную статью расходов в этом месяце",''),
       b=prompt("Во сколько обойдется?",'');
    if( typeof(a) === 'string'  && typeof(a) != null && typeof(b) != null 
    && a!='' && b!='' && a.length < 50){
        appData.expenses[a] =b;   
        console.log("done") ;  
    }
    else if( typeof(a) === 'string'  && typeof(a) != null && a!='' && a.length < 50){
        b=prompt("Повторите ввод суммы для статьи расходов:"+a,'');
             if(typeof(b) != null  && b!=''){
                appData.expenses[a] =b;   
                 console.log("done2") ;  
            }
        }
    
}*/
let i=0;
while (i < 2){
    let    a=prompt("Введите обязательную статью расходов в этом месяце",''),
    b=prompt("Во сколько обойдется?",'');
 if( typeof(a) === 'string'  && typeof(a) != null && typeof(b) != null 
 && a!='' && b!='' && a.length < 50){
     appData.expenses[a] =b;   
     console.log("done") ;  
 }
 else if( typeof(a) === 'string'  && typeof(a) != null && a!='' && a.length < 50){
     b=prompt("Повторите ввод суммы для статьи расходов:"+a,'');
          if(typeof(b) != null  && b!=''){
             appData.expenses[a] =b;   
              console.log("done2") ;  
         }
     }
i++;
};


alert("Ежедневный доход: "+ appData.ra);


