"use strict";


// Календарь.*******************************************************************************************************************
var date = new Date();
var months =["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
var month = date.getMonth();
var year = date.getFullYear();
var firstWeekDay = new Date(year,month,1).getDay();
var lastWeekDay = new Date(year,month+1,0).getDay();
var lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
var lastDayPrevMonth = new Date(date.getFullYear(),date.getMonth(),0).getDate();
var today = date.getDate();
var calendarBody = '';


var calendar = document.getElementById('calendar');


// Текущий год, месяц.
// Опционально: добавить кнопки переключения месяца.
var caption = calendar.getElementsByTagName('caption');
caption[0].innerHTML = months[date.getMonth()] + " " + year;


// Ячейки с числами предыдущего месяца.
if (firstWeekDay != 0){
	for(var i = 1; i < firstWeekDay; i++) calendarBody += '<td class="prevMonth">' + (lastDayPrevMonth-(6-i));
}else{
	for(var i = 0;i < 6;i++) calendarBody += '<td>'
}



// Текущий месяц.
for(var i = 1; i <= lastDay; i++){
	if (i != today){
		calendarBody += '<td>' + i;
	}else{
		calendarBody += '<td class="today">' + i;

	}
	if (new Date(year,month,i).getDay() == 0)
		calendarBody += '<tr>';
}



// Ячейки с числами следующего месяца.
if (lastWeekDay != 0){
	var x = 1
	for(i<=lastWeekDay; i < 7; i++){
		++x
	} 
		

	calendarBody += '<td class="prevMonth">' + x;
}




 var tbody = document.getElementById('tbody');
 tbody.innerHTML = calendarBody;
// Конец Календаря ***********************************************************************************************************************
