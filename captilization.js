const capitalization = (input) => {
   const firstLater = input[0].toUpperCase()
   const arrayInput = input.split('')
   arrayInput[0] = firstLater
   const finalInput = arrayInput.join('');
   return finalInput
}
module.exports = capitalization;
