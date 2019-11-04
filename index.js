// Code your solutions in this file
// Thank you, Lisa, for the wonderful surprise gift!
// writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards( names, holiday) {
  let cards = [];
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`);
  }

  return cards;
}


function countdown( countdown ) {
  while ( countdown > 0 ) {
    console.log( countdown );
    countdown -= 1;
  }
  console.log( countdown );
}
