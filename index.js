// Code your solutions in this file




function writeCards(Array, event) {
    const a = []
    for (let i = 0; i < Array.length; i++) {   
        a.push(`Thank you, ${Array[i]}, for the wonderful ${event} gift!`);
    }
    return a;
}



function countdown(number) {
    let countdown = 0;
    while (number >= countdown) {
        console.log(number--);
    }
}

