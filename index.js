// Code your solutions in this file

function writeCards(array, eventName) {
   let output = [];

   for (let i = 0; i < array.length; i++) {
      output.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
   }
   return output;
}


function countdown(number) {
   let i = number;
   while (i >= 0) {
      console.log(i);
      i --;
   }
};
