// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function incrementFunc(number) {
  return number + 1
}
console.log(incrementFunc(5))
// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalizeFunc(word) {
  const str = word.charAt(0).toUpperCase() + word.slice(1)
  return str
}
console.log(capitalizeFunc('taYo'))

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below
function personEmog(name) {
  const result = 'Hi, ' + capitalizeFunc(name) + ' ' + ':)'
  return result
}
console.log(personEmog('ade'))

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
// function
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below

function arrayStr(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      console.log(typeof arr[i])
      count++
    }
  }
  return count
}
console.log(arrayStr(['ade', 4, 'love']))

// 5. Define a function that takes an object and adds a property 'edward'
//  to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}

// TODO: write code below

function objectProp(obj) {
  if (obj.edward === undefined) {
    obj.edward = 'amazing'
  }
  return obj
}
console.log(objectProp({}))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementFunc, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalizeFunc, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: personEmog, // etc
  d: arrayStr,
  e: objectProp
}
