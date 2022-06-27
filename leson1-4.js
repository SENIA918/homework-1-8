//Задача4.Напишите функцию, которая преобразовывает и объединяет все элементы массива (numbers + strings) в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами (с использованием цикла и без него)
//Функция должна принимать массив а возвращать строку.
const arrays = [1,2,'МАССИВ'];

function arrShows(arrays) {
    for (let i = 0; i < arrays.length; i++) {
    }
    let str1 = arrays.toString();
        return(str1);  
    }
    document.write(arrShows(arrays));
//Пример 2
const b = [1,2,'МАССИВ'];

function arrShow(){
let str1 = b.join();
    return(str1); 
}
    document.write(arrShow());
