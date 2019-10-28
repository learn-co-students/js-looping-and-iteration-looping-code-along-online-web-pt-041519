function writeCards(names, special) {
    const array = [];
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${special} gift!`);
    }
    return array;
}

function countdown(n) {
    let number = n + 1
    while ( number > 0 ) {
        console.log(number -= 1);
    }
}