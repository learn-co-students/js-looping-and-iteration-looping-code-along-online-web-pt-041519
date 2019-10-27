function writeCards(names, special) {
    const array = [];
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${special} gift!`);
    }
    return array;
}