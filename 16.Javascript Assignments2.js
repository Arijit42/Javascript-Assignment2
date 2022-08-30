//Javascript Assignment 2
/*1. Write a Javascript function to check whether a triangle is equilateral,
isosceles or scalene*/
function checkTriangle(x, y, z)
{
     
    // Check for equilateral triangle
    if (x == y && y == z)
        console.log("Equilateral Triangle");
 
    // Check for isosceles triangle
    else if (x == y || y == z || z == x)
        console.log("Isosceles Triangle");
 
    // Otherwise scalene triangle
    else
        console.log("Scalene Triangle");
}

checkTriangle(5,9,10)
/*2. Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.*/
const grade=100;
function studentGrade(marks){
let grade
    switch (true){
        case (marks <= 100 && marks >= 90):
            console.log("S grade")
            break;
        case (marks <= 90 && marks >= 80):
            console.log("A grade")
            break;
        case (marks <= 80 && marks >= 70):
            console.log("B grade")
            break;
        case (marks <= 70 && marks >= 60):
            console.log("C grade")
            break;
        case (marks <= 60 && marks >= 50):
            console.log("D grade")
            break;
        case (marks <= 50 && marks >= 40):
            console.log("E grade")
            break;  
        case (marks <= 40 && marks >=0): 
            console.log("Student has failed")
            break;
        default:
            console.log("invalid Marks")
            break;
    }
}
studentGrade(71)
/*3. Write a JavaScript program to find the sum of the multiples of 3 and 5
under 1000*/
function multiples(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
  
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  console.log( multiples(10) );
  console.log( multiples(5) );
  console.log( multiples(6) );
/*4. Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100)*/