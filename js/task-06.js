let input = prompt('Введи число');
let total = 0;
for(let i = 0; input ; i+=1){
    if (!isNaN(Number(input))) {
        total +=Number(input)
        input = prompt('Введи число');
    } else{
        input = prompt('Введи число');
    }
}
alert(`Общая сумма чисел равна ${total}`)


