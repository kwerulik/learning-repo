import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

const today = dayjs();

//Zad2
let deliveryDate = today.add(1, "month");
let dateString = deliveryDate.format("<MMMM>, <D>");
console.log(dateString);

//Zad3

deliveryDate = today.subtract(1, 'month');
dateString = deliveryDate.format("<MMMM>, <D>");
console.log(dateString);

//Zad3

dateString = today.format("<dddd>")
console.log(dateString);

//Zad4

console.log(isWeekend(today));
console.log(isWeekend(today.add(1,'day')));
console.log(isWeekend(today.add(2, "day")));
console.log(isWeekend(today.add(3, "day")));
console.log(isWeekend(today.add(4, "day")));
console.log(isWeekend(today.add(5, "day")));
console.log(isWeekend(today.add(6, "day")));

function isWeekend(date){
  date = date.format('dddd');
  if( date === "Saturday" || date === 'Sunday'){
    return 'Its weekend'
  }
  return 'Its not a weekend'
}