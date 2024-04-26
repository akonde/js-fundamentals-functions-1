// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function twoNums(lower, upper) {
  const results = []
  for (let i = lower; i <= upper; i++) {
    results.push(i)
  }
  return results
}
console.log(twoNums(1, 3))
// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function twoArg(str, num) {
  let text = str.toUpperCase()

  for (let i = 0; i < num; i++) {
    text = text + '!'
  }
  return text
}
console.log(twoArg('ade', 3))
// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after
//  adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below

function timeIn24hr(str, num) {
  const [hours, minutes] = str.split(':').map(Number)

  // Calculate total minutes
  let totalMinutes = hours * 60 + minutes + num

  // Normalize total minutes to stay within a day (24 hours)
  totalMinutes %= 1440

  // Calculate new hours and minutes
  const newHours = Math.floor(totalMinutes / 60)
  const newMinutes = totalMinutes % 60

  // Format new time as a string in 24-hour format
  const newTime = `${newHours.toString().padStart(2, '0')}:${newMinutes
    .toString()
    .padStart(2, '0')}`

  return newTime
}
// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: twoNums, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: twoArg, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: timeIn24hr // etc
}
