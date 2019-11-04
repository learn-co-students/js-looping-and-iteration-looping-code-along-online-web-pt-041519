import { write } from "fs";

// Code your solutions in this file

function writeCards(names, event) {
    let array = [];
    for (let i = 0; i < names.length; i++) {
       
        // console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return array;
}

function countdown(num) {
    let count = num;
    while ( count >= 0) {
        console.log(count--)
    }

}