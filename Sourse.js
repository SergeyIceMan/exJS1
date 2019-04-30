'use strict';
let money,time;
function start(){
    let money=+prompt("Ваш бюджет на месяц?",''),
    time=prompt("Введите дату в формате YYYY-MM-DD",'');
    
    while(isNaN(money)|| money == null || money == '' ){
        let money=+prompt("Ваш бюджет на месяц?",'');
    }
}



    let  appData={
    b:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
};


appData.ra=(appData.b/30).toFixed(1);

function detectDayBudget(){
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
    }
}
detectDayBudget();

alert("Ежедневный доход: "+ appData.ra);

function IncamCheck(){
    if(appData.savings == true ){
        let save =+prompt("Введите сумму накоплений: ",''),
            proc =+prompt("Введите процент по накоплению",'');
        appData.IncomeSave = (save/100/12*proc).toFixed(1);
    }
    alert("Доход по вашему депозиту в месяц: " + appData.IncamSave);
}

IncamCheck();
appData.optionalExpenses;

function chooseOptExpenses(){
    for(let i=0; i < 3; i++) {
        let    a=prompt("Статья необязательных расходов?",''),
                b=prompt("Во сколько обойдется?",'');
             if( typeof(a) === 'string'  && typeof(a) != null && typeof(b) != null 
            && a!='' && b!='' && a.length < 50){
                appData.optionalExpenses[a] =b;   
                console.log("done") ;  
            }
            else if( typeof(a) === 'string'  && typeof(a) != null && a!='' && a.length < 50){
                b=prompt("Повторите ввод суммы для статьи расходов:"+a,'');
                    if(typeof(b) != null  && b!=''){
                    appData.optionalExpenses[a] =b;   
                     console.log("done2") ;  
                    }
            }
        }

}

//chooseOptExpenses();