// 1. Write a function that displays current date & time in your
// browser.
document.write("<h1>Date</h1><br>");
function myDate(){
    var currentDate = new Date()
    document.write(currentDate + "<br><br>")
}
myDate();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function greeting(fname, lname){
    document.write("Hello " + fname + ' ' + lname + "<br><br>");
}
greeting("Syed", "Huzaifa");

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers

function add(num1, num2){
    var num1 = prompt("Enter first numer")
    var num1 = prompt("Enter second numer")
    document.write(num1 + num2 + "<br><br>");
}
add(num1,num2);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
document.write("<h1>Calculator</h1><br>")
function calculator(num1, num2, operation){
    if(operation === "+"){
        document.write(num1 = num2 + "<br><br>");
    }
    else if(operation === "-"){
        document.write(num1-num2 + "<br><br>"); 
    }
    else if(operation === "*"){
        document.write(num1*num2+ "<br><br>"); 
    }
    else if(operation === "/"){
        document.write(num1/num2+ "<br><br>"); 
    }
}

calculator(2,4,"+");
calculator(2,4,"-");
calculator(2,4,"+");
calculator(2,4,"/");

// 5. Write a function that squares its argument.
document.write("<h1>Square</h1><br>");
function square(num1){
    document.write(num1 ** 2 + "<br>")
}
square(4);

// 6. Write a function that computes factorial of a number.
document.write("<h1>Factorial</h1><br>");
function factorial(n){
    var answer = 1;
    if(n == 0 || n == 1){
        document.write(1 + "<br><br>");
    }
    else{
        for(var i = n; i >= 1; i--){
            answer = answer * i;
          }
          document.write(answer + "<br><br>");
    }
}
factorial(5);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
document.write("<h1>Count to a range</h1><br>");
function counting(num, range){
    for(var i = num; i<=range; i++){
        document.write(i + "<br>");
    }
}
counting(1,10);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2.
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
document.write("<h1>Hypotenuse Calculator</h1><br>");
function calculateHypotenuse(base, perpendicular){
    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
    function calculateSquare(para1){
        return para1**2
    }
    document.write("Hypotenuse: " + hypotenuse + "<br><br>");
}
calculateHypotenuse(2,4);

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
document.write("<h1>Area of rectangle</h1><br>");
function areaOfRectangle(width, height){
    var area = width * height;
    document.write("Area of Rectangle: " + area + "<br><br>");
}
areaOfRectangle(2,4);
var w = parseInt(prompt("Enter width of the rectangle: "));
var h = parseInt(prompt("Enter height of the rectangle: "));
areaOfRectangle(w,h);

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
document.write("<h1>Palindrom Check</h1><br>");
function checkPalindrome(string) {
    var len = string.length;
    for (var i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            document.write('It is not a palindrome' + "<br><br>");
         }
     }
    document.write('It is a palindrome' + "<br><br>");
}   
var string = prompt('Enter a string: ');
checkPalindrome(string);

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
document.write("<h1>Title Cased string</h1><br>");
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ");
 }
 var titleCased = titleCase("the quick brown fox");
document.write("<b>The Original String: </b>" + "the quick brown fox" + "<br>" + "<b>The Converted string:</b> " + titleCased);

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
document.write("<h1>Longest word in a string</h1><br>");
function longestWordCheck(string){
    var strSplit = string.split(' ');
    var longestWord = 0;
    var word;
    for(var i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){
        longestWord = strSplit[i].length;
        word = strSplit[i]
        }
      }
    document.write("The longest word in the string is: " + word + "<br><br>");
}
longestWordCheck("Web Development Tutorial");

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
document.write("<h1>Counting occurences of a character in a string</h1><br>");
function occurrences(string, char){
    var occurrences=0;
    for(i=0; i<string.length; i++){
        if(char === string[i]){
            occurrences+=1;
        }
    }
    document.write("The character '" + char + "' occurs " + occurrences + " times in the string<br><br>");
}
occurrences("JSResourceS.com", "o");

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
document.write("<h1>Geometrizer</h1><br>");
document.write("<h3>Calculater Circumference</h3><br>");
function calcCircumference(radius){
    document.write("The circumference is " + (2*Math.PI*radius) + "<br><br>");
}
calcCircumference(4);
document.write("<h3>Calculater Area</h3><br>");
function calcArea(radius){
    document.write("The area is " + ((Math.PI) * (radius**2)) + "<br><br>");
}
calcArea(4);