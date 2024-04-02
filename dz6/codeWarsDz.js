// 1 
//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// function sum (numbers) {
//  let result = 0
//  numbers.forEach(element => {
//     result=result+element
//  });
//     return result
// };
//  console.log(sum([-2.398]))

 // 2
 // Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 function evenOrOdd(number) {
    if(number % 2 === 0){
        return 'Even'
    }else{
        return 'Odd'
    }
}
 console.log(evenOrOdd(35));