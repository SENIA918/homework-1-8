//Задача3.Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.
 const arrD = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
   function copyArr(arrD) {
   let array = arrD;
   return array.slice(0);

}
document.write(copyArr(arrD)); 

