// Code your solutions in this file
function writeCards(arr, eventName) {
  let cards = []
  for(let i=0; i < arr.length; i++) {
    cards.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
  }
  return cards
}

function countdown(startNum) {
  let i = startNum
  while (startNum >= 0) {
    console.log(startNum--)
  }
}
