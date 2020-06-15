/*******************************************************************************
 * Your code here!
 ******************************************************************************/

// const userInput = getInput(0)

// function divisible() {
//   if (userInput % 3 === 0 && userInput % 5 === 0 ) {
//   return 'FizzBuzz'
// } else if (userInput % 3 === 0) {
//     return 'Fizz'
// } else if (userInput % 5 === 0) {
//     return 'Buzz'
// } return userInput}  

// let printResult = divisible() 
// console.log(printResult);



//=================Stretch Goal 1: when there are 3 inputs ======================

// const userInput = getInput(0)
// const firstNumber = getInput(1)
// const secondNumber = getInput(2)

// function divisible() {
//   if (userInput % firstNumber === 0 && userInput % secondNumber === 0 ) {
//   return 'FizzBuzz'
// } else if (userInput % firstNumber === 0) {
//     return 'Fizz'
// } else if (userInput % secondNumber === 0) {
//     return 'Buzz'
// } return userInput}  

// let printResult = divisible() 
// console.log(printResult);



//=================Stretch Goal 2 : Reset to default if user put only 1 number ======================

//Step1: store 3 input into 3 variables
const userInput = getInput(0)
const firstNumber = getInput(1)
const secondNumber = getInput(2)

//Step2: Function print result when there are 3 inputs

function firstDivisibleBySecondNThird() {
  if (userInput % firstNumber === 0 && userInput % secondNumber === 0 ) {
      return 'FizzBuzz'
    } else if (userInput % firstNumber === 0) {
        return 'Fizz'
    } else if (userInput % secondNumber === 0) {
        return 'Buzz'
    } return userInput
}

let printFirstDivisibleBySecondNThird = firstDivisibleBySecondNThird();

//Step3: Function print result when there's only 1 input

function divisibleBy3And5() {
  if (userInput % 3 === 0 && userInput % 5 === 0 ) {
      return 'FizzBuzz'
    } else if (userInput % 3 === 0) {
        return 'Fizz'
    } else if (userInput % 5 === 0) {
        return 'Buzz'
    } return userInput 
}

let printDivisibleBy3And5 = divisibleBy3And5()

//Step4: Combine two functions above

function combineFunctions(){
  if (firstNumber === undefined && secondNumber === undefined ) {
    return printDivisibleBy3And5; 
  } return printFirstDivisibleBySecondNThird 
}

let printResult = combineFunctions() 
console.log(printResult);



/*******************************************************************************
  The below helper function will return an argument the user used when launching
  the app.

  So if the app was launched using the command `node main.js 5 8`, for example,
  5 would be the first argument, and 8 the second.

  Our helper function takes a number as a parameter and returns the argument
  with that index, as a string.

  If no argument with the given index was used when launching the app,
  undefined will be returned.

  The indices are not the indices of a string, with each character its own
  individual string. Instead, each space-separated word is its own index.

  See the following diagram of indices for an example:

  input: node main.js help what is 32 * 9 please
  indices:             0    1   2  3  4 5   6

  So if the user typed in `node main.js 47 times 5`, then the following calls
  to `getInput` would result in the following outputs:

  getInput(0) // -> '47'
  getInput(1) // -> 'times'
  getInput(2) // -> '5'
  getInput(3) // -> undefined

  For most apps, you will need multiple inputs from the user, but for this 
  one, getInput(0) should be all you need.
 ******************************************************************************************/

function getInput(i) {
  return process.argv[i + 2];
}
