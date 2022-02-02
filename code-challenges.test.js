// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// const people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]



//Pseudo Code:
/*
-Input an object array, the output is an array with capitalized name with description for each object.
-Do an iteration for every object and grab name and occupation and create a function to return a string with capitalized names and description together.
--Function process
-Name would need to splitted to two elements, next step capitalize the elements, then join them together back as a string.
-A string interpolation would be done to join Name with occupation
- Return an array of sentences for every object input of the original array.
-In addition, need to do a red-green-refactor methodolgy, people.
*/

// First Step: Perform Red

// describe("employment", () => {

//     it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {

//         expect(employment(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//     })
// })

// Received an error =>  ReferenceError: employment is not defined

//Second Step: Make the test pass for people



// b) Create the function that makes the test pass.
// --Function process
// -Name would need to splitted to two elements, next step capitalize the elements, then join them together back as a string.
// -A string interpolation would be done to join Name with occupation
// - Return an array of sentences for every object input of the original array.

// const employment = (lifeJobs) => {

// return lifeJobs.map(nameDescription => {

//   let name = nameDescription.name.split(" ").map(value => value.replace(value[0],value[0].toUpperCase()))
//   let fullname = name.join(" ")
//   let description = nameDescription.occupation
//   let sentence = `${fullname} is ${description}.`
//   return sentence
// })

// }


//Third Step: Refactor
/*
Removed the nested .map function and use a .replace method to improve the O(n).
*/

const employment = (lifeJobs) => {

  return lifeJobs.map(nameDescription => {
  
    let FirstNameLetter = nameDescription.name[0]
    let LastNameLetter = nameDescription.name[nameDescription.name.indexOf(' ') + 1]
    let name = nameDescription.name.replace(FirstNameLetter,FirstNameLetter.toUpperCase()).replace(LastNameLetter,LastNameLetter.toUpperCase())
    let description = nameDescription.occupation
    return `${name} is ${description}.`
  })

}


describe("employment", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]

  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {

      expect(employment(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// // Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// // Expected output: [ 2, 1, -1 ]


//Pseudo Code:
/*
-Input an object array, the output is an array with remainder for numbers divided by 3.
-Create a filter to remove non-numbers by performing a typeOf "number"
-Perform a iteration for the filtered numbers, value % 3 
-Output an array of the remainders for the values.
-In addition, need to do a red-green-refactor methodolgy, people.
*/

// First Step: Perform Red

// describe("remainders", () => {

//   it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {

//       expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//   })
// })

// Received an error =>  ReferenceError: remainders is not defined

//Second Step: Make the test pass for hodgepodge1, hodgepodge2

// describe("remainders", () => {

//   it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {

//       expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]);
//       expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ]);
//   })
// })



// b) Create the function that makes the test pass.
// -Create a filter to remove non-numbers by performing a typeOf "number"
// -Perform a iteration for the filtered numbers, value % 3 
// -Output an array of the remainders for the values.

// const remainders = (arrayOfThings) => {
//   arrayfilter = arrayOfThings.filter(value => {
//     return typeof value === "number"
//   }).map(value => value % 3)
  
  
//   return arrayfilter
// }

//Third Step: Refactor
/*
Create implicit arrows to show .filter and .map in one line.
*/

const remainders = (arrayOfThings) => {
  return arrayOfThings.filter(value => typeof value === "number").map(value => value % 3)
}


describe("remainders", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]

  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {

      expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]);
      expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ]);
  })
})




// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// // Expected output: 1125


//Pseudo Code:
/*
-Input an array of numbers and outputs the cubed result for the values.
-Perform an iteration to sum the previous and current value ** 3 "cubed"
-Output a numberical result
-In addition, need to do a red-green-refactor methodolgy, people.
*/

// First Step: Perform Red

// describe("sumCubed", () => {

//   it("Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.", () => {

//       expect(sumCubed(cubeAndSum1)).toEqual(99)
//   })
// })

// Received an error =>  sumCubed is not defined


//Second Step: Make the test pass for cubeandSum1, cubeandSum2

// describe("sumCubed", () => {
//   const cubeAndSum1 = [2, 3, 4]
//   // Expected output: 99
//   const cubeAndSum2 = [0, 5, 10]
//   // Expected output: 1125

//   it("Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.", () => {

//       expect(sumCubed(cubeAndSum1)).toEqual(99);
//       expect(sumCubed(cubeAndSum2)).toEqual(1125);
//   })
// })

// b) Create the function that makes the test pass.
// -Input an array of numbers and outputs the cubed result for the values.
// -Perform an iteration to sum the previous and current value ** 3 "cubed"
// -Output a numberical result

// const sumCubed= (arrayOfNumbers) => {
//   result = arrayOfNumbers.reduce((previous,current)=>{
//     return previous + current ** 3
//   },0)
//   return result
// }

//Third Step: Refactor
/*
Remove the result variable.
*/

const sumCubed= (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((previous,current)=>{
    return previous + current ** 3
  },0)
}


describe("sumCubed", () => {
  const cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  const cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125

  it("Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.", () => {

      expect(sumCubed(cubeAndSum1)).toEqual(99);
      expect(sumCubed(cubeAndSum2)).toEqual(1125);
  })
})
