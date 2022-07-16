// 1. Write a program that displays current date and time in
// your browser.

var date = new Date();
document.write(date);

// 2. Write a program that alerts the current month in words.
// For example December.

var currenMonth = currentDate.toLocaleString('default', {month: 'long'});
document.write("The current month is: " + "<b>"+ currenMonth + "</b><br><br>");

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var shortDay = currentDate.toLocaleString('default', {weekday: 'long'});
document.write("Today is <b>" + shortDay.slice(0,3) + "</b><br><br>");

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

if(shortDay === "Sunday" || shortDay === "Saturday"){
    document.write("It's Fun day <br><br>");
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
var day = currentDate.getDay();
if(day < 16){
    document.write("First fifteen days of the month<br><br>");
} else("last days of the month");

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
var newDate = new Date('1-1-1970');
newDate.setHours(0,0,0,0);
var minutesFrom = (currentDate.getTime() - newDate.getTime()) / (1000 * 60);
document.write("Current Date: <b>" + newDate + "</b><br>");
document.write("Elapsed milliseconds since January 1, 1970: <b>" + (currentDate.getTime() - newDate.getTime()) + "</b><br>");
document.write("Elapsed minutes since January 1, 1970: <b>" + minutesFrom + "</b><br><br>");

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
var hours = currentDate.toLocaleString('en-US', { hour: 'numeric', hour12: true })
var timeCheck = hours.indexOf('PM');
if (timeCheck === -1){
    alert("It's AM");
}
else{
    alert("It's PM");
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate
var laterDate = new Date('12-31-2020');
document.write("The last day of the last month of 2020 is, Later date: " + laterDate + "<br><br>");

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var ramadanDate = new Date('6-18-2015');
var timePassedSinceRamadan = ((currentDate.getTime()-ramadanDate.getTime())/(1000 * 60 * 60 * 24));
document.write(timePassedSinceRamadan + " days have passed since 1st Ramadan, 2015 <br><br>");

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
var referenceDate = new Date('12-05-2015');
referenceDate.setHours(0,0,0,0);
document.write("On reference date " + referenceDate + ", <br>" + referenceDate.getTime()/(1000 * 60) + " seconds had passed since the beginning of 2015<br><br>");

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
var currentDate2 = new Date();
var currentDate3 = new Date();
currentDate2.getHours();
var changedHours = currentDate3.setHours(currentDate2.getHours()-1);
document.write("Current date: " + currentDate2 + "<br>1 hour ago, it was " + currentDate3 + "<br><br>");

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
var currentDate4 = new Date();
var currentDate5 = new Date();
currentDate5.setFullYear(currentDate4.getFullYear() - 100);
document.write("Current date: " + currentDate4 + "<br>100 years back, it was " + currentDate5 + "<br><br>");

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
var userAge = parseInt(prompt("Enter your age in Years: "));
var birthYear = currentDate4.getFullYear() - userAge;
document.write("Your age is " + userAge + "<br>Your birth year is " + birthYear + "<br><br>");

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

document.write("<h1>K-Electric Bill</h1><br>")
var customerName = prompt("Enter the customer name: ");
var monthOf = prompt("Enter the billing month: ");
var month; var currentDate6 = new Date();
var units = parseInt(prompt("Enter the units: "));
var chargesPerUnit = parseInt(prompt("Enter the charges per unit: "));
var netAmount = units * chargesPerUnit;;
var latePaySubcharge = 350;
var afterDueAmount = (units * chargesPerUnit) + latePaySubcharge;

document.write("Customer Name: <b>" + customerName + "</b><br>");
document.write("Month: <b>" + monthOf + "</b><br>");
document.write("Number of units: <b>" + units + "</b><br>");
document.write("Charges per unit: <b>" + chargesPerUnit + "</b><br><br>");
document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>");
document.write("Late Payment surcharge: <b>" + latePaySubcharge + "</b><br>");
document.write("Gross amount Payable (after Due Date): <b>" +  afterDueAmount + "</b>");