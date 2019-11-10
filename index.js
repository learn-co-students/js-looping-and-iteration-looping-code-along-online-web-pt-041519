const thankYou = [ 'Lisa', 'Kaitlin', 'Jan' ]
const holiday = "surprise"

function writeCards(thankYou, holiday) {
    let array = []
    for (let i = 0; i < thankYou.length; i++){
        array.push(`Thank you, ${thankYou[i]}, for the wonderful ${holiday} gift!`);
           
    }
    return array
}   


function countdown() {
    let countdown = 10;
    while (countdown >= 0) {
        console.log(countdown--);
    }
}