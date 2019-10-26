// Code your solutions in this file
// cards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards(cards, event) {
    let finishedCards = [];
    for (let i = 0; i < cards.length; i++) {
      finishedCards.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
   
    return finishedCards;
  }


function countdown(number)  {
    while (number >= 0) {
    console.log(number--);
    }
}



