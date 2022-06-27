//Составьте массив дней недели. С помощью foreach выведите все дни недели, а текущий день выведите курсивом.
  //  Текущей день недели должен быть получен с помощью JS класса Date
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let dayOfWeek = new Date().getDay();
if (dayOfWeek === 0) {
    dayOfWeek = 7; }
for (let i = 0; i < week.length; i++){
    if (i === dayOfWeek - 1){
        document.write(week[i].bold());
    }
    else{
        document.write(week[i]);
    }
}
