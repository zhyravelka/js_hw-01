let credits = 35500;
let pricePerDroid = 3000;
let totalPrice;
let numDroid = prompt('Яку кількість дроїдів ви хочете купити?');
if(!numDroid){
    console.log('Отменено пользователем!');
} else{
    totalPrice=numDroid * pricePerDroid;
    if (totalPrice>credits){
        console.log('Недостаточно средств на счету!')
    }else{
        console.log(`Вы купили ${numDroid} дроидов, на счету осталось ${credits-totalPrice} кредитов.`)
    }
    
}
