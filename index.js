// Code your solutions in this file
const arrayThanks = [] 
function writeCards(arrayNames, message)
{
    for(let i = 0; i < arrayNames.length; i++)
    {
        let note = `Thank you, ${arrayNames[i]}, for the wonderful ${message} gift!`;
       arrayThanks.push(note);
    }
    return arrayThanks;
}

function countdown(number)
{
    while (number >= 0) 
    {
        console.log(number--);
    }
}
