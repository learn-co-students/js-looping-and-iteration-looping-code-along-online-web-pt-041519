function writeCards(names, occasion) {
  const thankYous = []
  for (let i = 0; i < names.length; i++) {
    thankYous.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
  }
  return thankYous
}

function countdown(num) {
  let i = num
  while(i >= 0) {
    console.log(i)
    i--
  }
}
