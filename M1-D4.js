/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

let length = 11
let width = 12
const area = function(length, width) {
    
    return length * width
}
console.log(area(11,12));


/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
let int1 = 5
let int2 = 5
const crazySum = function(int1, int2) {
    if (int1 === int2){

    return  (int1 + int2) * (int1 + int2) * (int1 + int2)
} else {
    return (int1 + int2)
}}
console.log(crazySum(5, 5));


/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
let x = 29
 const crazyDiff = function (x) {
 let diff = x - 19 ;

 if(diff < 0) {
     diff = -diff;
 }
 if (x > 19) {
     diff = diff * 3
 }
     return (diff);

 }
 console.log(crazyDiff(29));






/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

/* WRITE YOUR CODE HERE */

const boundary = function(N){
if (20 < N < 100 || N === 400)
{  return true 
} }
console.log(boundary(40));


/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

/* WRITE YOUR CODE HERE */

const strivify = function(S){

    



/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 =function(a){
    if (num % 3 === 0 || num % 7 === 0)  
  return true;
}  else {
    return false
}

console.log(check3and7(33));


/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */


const reverseString = function(Strive) {
    return reverseString.split("").reverse().join("");
}
console.log(reverseString("Strive"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
 const cutString = function (Sumanth)
 { return "Sumanth".slice(1, -1)}
 console.log(cutString);

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

const giveMeRandom = function(b) {
    let array =[];
    for (let x = 0; x < n; x++){
        array
    }
}

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
