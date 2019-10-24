function writeCards(names, holiday) {
    let array = []
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`)
    }
    return array;
}

function countdown(number) {
    let countdown = 0;
    while (countdown <= number) {
        console.log(number--);
    }
}

