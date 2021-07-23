const ADMIN_PASSWORD = 'adminpass';
let message = prompt('Ваш пароль?');
if (message==ADMIN_PASSWORD){
    alert('Добро пожаловать!');
}
else if(!message){
    alert('Отменено пользователем!');
}
else{
    alert('Доступ запрещен, неверный пароль!');
}
