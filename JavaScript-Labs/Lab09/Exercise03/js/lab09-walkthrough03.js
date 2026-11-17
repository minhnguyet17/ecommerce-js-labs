/* Exercise 9.3 — Modifying the DOM */

/* code goes here */
// Step 1: tạo phần tử <p> mới và gắn vào <div id="first">
var first = document.getElementById("first");

var text = document.createTextNode("this is programmatically created");
var p = document.createElement("p");

p.appendChild(text);
first.appendChild(p);

// Step 3: xoá một phần tử <li> khỏi danh sách
var icons = document.getElementById("iconList");
icons.removeChild( document.getElementById("deleteThisOne") );
