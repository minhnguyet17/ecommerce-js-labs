/* Exercise 8.6 — Using Built-in JavaScript Objects */

// Step 2-3: String object vs. string literal
var stringOne = new String("Test");     // object
var stringTwo = "Test";                 // literal
var stringThree = "Test";               // literal
var stringFour = new String("Test");    // object

document.write("<br>typeof stringOne=" + typeof stringOne);      // object
document.write("<br>typeof stringThree=" + typeof stringThree);  // string

// Step 4: so sánh == (chỉ so giá trị) và === (so cả giá trị lẫn kiểu)
if (stringOne == stringTwo)
    document.write("<br>stringOne has = value to stringTwo");
if (stringOne == stringFour)        // 2 object khác nhau -> false
    document.write("<br>stringOne has = value to stringFour");
if (stringOne === stringTwo)        // object vs literal -> false
    document.write("<br>stringOne has = value and = type to stringTwo");
if (stringTwo === stringThree)      // 2 literal -> true
    document.write("<br>stringTwo has = value and = type to stringThree");
if (stringTwo === stringFour)       // literal vs object -> false
    document.write("<br>stringTwo has = value and = type to stringFour");

// Step 5: Date object
var dateOne = new Date();
document.write("<p>" + dateOne + "</p>");

// Step 6: Math object
document.write(Math.PI + "<br/>");
document.write(Math.sqrt(4) + "<br/>");
document.write(Math.random() + "<br/>");
