//todo Chapter 26 - 30 
//! question 1:
let number = +prompt(`ENTER A POSITIVE INTEGER:`)
document.write(`number:${number}<br>`)
let round = Math.round(number)
document.write(`round:${round}<br>`)
let floor = Math.floor(number)
document.write(`floor:${floor}<br>`)
let ceil = Math.ceil(number)
document.write(`ceil:${ceil}<br>`)  

//! question 2:
let number1 = +prompt(`ENTER A NEGATIVE INTEGER:`)
document.write(`number:${number1}<br>`)
let round1 = Math.round(number1)
document.write(`round:${round1}<br>`)
let floor1 = Math.floor(number1)
document.write(`floor:${floor1}<br>`)
let ceil1 = Math.ceil(number1)
document.write(`ceil:${ceil1}<br>`)  

//! question 3:
let int = +prompt(`ENTER A NEGATIVE INTEGER:`)
let abs = Math.abs(int);
document.write(`The absolute value of ${int} is ${abs}`)

//! question 4:
let dice = Math.floor(Math.random() * 6) +1;
document.write(`random dcice value : ${dice}`) ;

//! question 5:
let coin = Math.floor(Math.random() * 2) +1;

coin == 1 ? document.write(`HEADS`) :document.write(`TAILS`);

//! question 6:
let random = Math.floor(Math.random() * 100) +1;
document.write(`random number between 1 and 100 :${random}`)

//! question 7:
let weight = +prompt(`Enter your weight kilograms`);
let parsed = parseInt(weight);
document.write(`The weight of user is ${parsed} kilograms`)

//! question 8:
let secret = Math.floor(Math.random() * 10) +1;
let guess  = +prompt(`Guess the number:`)
guess ===secret ? alert(`congrarulatins`) : alert(`try again`)