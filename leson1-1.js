//Задание 1   Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.
let obj = {
            Минск:'Беларусь',
            Москва:'Россия',
            Киев:'Украина'
};
for (let key in obj){
    document.write(key + ' - это ' + obj[key] + ',');
}

