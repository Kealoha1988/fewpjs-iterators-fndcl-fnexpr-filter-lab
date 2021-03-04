// Code your solution here 
let even = arr.filter(n => {
  return n % 2 === 0;
});
// ## Use `filter()` to Return Matching Results

// We have an array of drivers with various information. We need to write methods
// using the `filter()` method so that PickMeUp Taxi service employees can easily
// query the data. Run the tests to see what conditions need to be met by each
// function _before_ you start writing JavaScript code.

// You'll be writing three functions:

// ### Write a Function To Case-insensitively Match `string`s
function findMatching(array, str) {
 let cool = array.filter(d => {d.toLowerCase() === str.toLowerCase()
  }
)
return cool
}

function fuzzyMatch(array, str) {
  return array.filter( d =>
    d.toLowerCase().indexOf(str.toLowerCase()) === 0
  )
}

function matchName(array, str) {
  return array.filter( d => d.name === str)
}



// Write `findMatching`- This function takes an array of `drivers` and a `string`
// as arguments, and returns the matching list of drivers. The function should be
// case insensitive.

// ### Write a Function To Partially Match Substrings

// Write `fuzzyMatch` - This function takes an array of `drivers` and a `string`
// as arguments for querying the array, and returns all drivers whose names begin
// with the provided letters.

// ### Write a Function To Match `object` Values To a Provided `string`

// Write `matchName` - This function takes an array of `drivers` and a `string` as
// arguments. In this function, each element of the `drivers` array is a
// JavaScript object that has a property of `name`. The function should return
// each element whose `name` property matches the provided `string` argument.