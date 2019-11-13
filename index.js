function writeCards(names, occasion) {
  const cards = []
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
  }
  return cards
}

function countdown(int) {
  while (int >= 0) {
    console.log(int)
    int--
  }
}
