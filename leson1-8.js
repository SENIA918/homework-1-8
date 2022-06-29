
//Задача8.Используя функцию из задания 7 напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.

    let array1 = [5, 2, 1, -10, 8];
    let array2 = [5, 2, 1, -9, 3, 7];
         function union() {
        let array3 = [];
        let arr = array1.concat(array2);
        for (let i = 0; i < arr.length; i++) {
            let e = arr[i];
            if (array3.indexOf(e) === -1)
            array3.push(e);
        }
        return array3;
    }
    document.write(union());
