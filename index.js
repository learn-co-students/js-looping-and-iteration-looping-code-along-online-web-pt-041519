// Code your solutions in this file
function writeCards(names, event) {
  let myarray = []
  for (let i = 0; i < names.length; i++) {
   myarray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`) 
  }
  return myarray 
}

function countdown(num) {
  let i = num
  while (num >= 0){
    console.log(num--)
  }
}