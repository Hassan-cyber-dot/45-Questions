"use strict";
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
let numbers = ['1', '2', '3', '4', '5'];
for (let number of numbers) {
    if (number == '1') {
        console.log("1st");
    }
    else if (number == '2') {
        console.log("2nd");
    }
    else if (number == '3') {
        console.log("3rd");
    }
    else if (number == '4') {
        console.log('4th');
    }
    else if (number == '5') {
        console.log('5th');
    }
    else {
        console.log(`$(number)th`);
    }
}
