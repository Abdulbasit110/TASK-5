//todo ch:31-34----------

//* Q1
let date = new Date();
document.write(date);

//* Q2
let date = new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
document.write(`Current month: ${months[date.getMonth()]}`);

//* Q3
let date = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.write(`Today is ${days[date.getDay()]}`);

//* Q4
let date = new Date();
const weekends = [1, 7];
const message = weekends.includes(date.getDay()) ? `its fun day` : `Let's go to work`;
document.write(message)

//* Q5:
let date = new Date().getDate()
const msg= (date>15 ? `last days of the month`: `first fifteen days of the month`)
alert(msg);

//* Q6:
let date = new Date()
alert(date)
let miliSeconds = date.getTime()
alert(`ELAPSED MILISECONDS SINCE JANUARY 1 ,1970 ${miliSeconds}`)
let minutes = miliSeconds / (1000 * 60)
alert(`ELAPSED MINUTES SINCE JANUARY 1 ,1970 ${minutes}`)

//* Q7:
let date = new Date()
let hours = date.getHours()
let msg = hours >=12 ? `PM`: `AM`
alert(msg)

//* Q8:
let date  = new Date ( ' 31 2023 december' )
alert(date)

//* 09:
let date1 = new Date(`22 march 2023`)
let date2 = new Date();
let diff = date2 - date1;
let days = Math.floor(diff / 86400000);
alert(days)

//* 10:
let date1 = new Date(`5 december 2015 22:50:16`)
let date2 = new Date(`2015`)
let diff = (date1 - date2)/1000 ;
alert(`On reference date ${date1}, ${diff} seconds had passsd since beginning of 2015`)

//* 11:
let currentDate = new Date();
let date = new Date();
currentHours = currentDate.getHours()
currentDate.setHours(currentHours - 1)
document.write(`current date : ${date} \n, 1 hour ago it was ${currentDate}`)

//*12
let today =new Date ()
let date =new Date ()
const yrs = today.getFullYear() - 100;
today.setFullYear(yrs);
alert(`current date: ${date} , \n 100 years back it was ${today}`)

//* 13
let age = +prompt(`your age`)
let date = new Date().getFullYear()
alert(`Your age is :${age}\n Your birth year is ${date - age}`) 

//* 14
let name= prompt(`your name`)
let date= new Date().toLocaleDateString(`default`,{month:`long`})
let unit = +prompt(`Number of units`)
let charges = 16;
let netAmount = unit * charges
let late = 350
let grossAmount = netAmount+late

document.write(`Customer Name: ${name}`)
document.write(`Month: ${date}`)
document.write(`Number of units: ${unit}`)
document.write(`Charges per unit: ${charges}`)

document.write(`Net amount payable(within due date): ${netAmount}`)
document.write(`Late payment surcharge: ${late}`)
document.write(`Gross Amount Payable(after due date): ${grossAmount}`)