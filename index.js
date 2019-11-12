// Code your solutions in this file

function writeCards(names) {
   let msgs = names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`)
   return msgs
}

function countdown(number) {
   for(let i = number; i >= 0; i--) {
      console.log(i)
   }
}

