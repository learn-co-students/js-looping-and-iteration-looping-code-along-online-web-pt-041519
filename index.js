
writeCards(["Ada", "Brendan", "Ali"], "birthday");


// For loop. writeCards(array of string names, event name) that users for to loop
function writeCards(names, eventName) {
  let thankYouArray = [];
  for (let i = 0; i < names.length; i++) {
    thankYouArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return thankYouArray;
}

// while countDown
function countdown(amount) {
  let i = amount;
  while (i >= 0) {
    console.log(i)
    i--;
  }
}