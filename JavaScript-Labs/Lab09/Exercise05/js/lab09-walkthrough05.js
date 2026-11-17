/* Exercise 9.5 — Responding to Load Events */

// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* your code goes here */

/* Step 2: chạy NGAY khi file được nạp (trong <head>) -> DOM chưa có div1
var divToGet = document.getElementById("div1");
alert(divToGet.innerHTML);
// -> Console: "Uncaught TypeError: Cannot read properties of null (reading 'innerHTML')"
*/

// Step 4: đợi trang tải xong (sự kiện load) rồi mới truy xuất DOM
window.addEventListener("load", function () {
    var divToGet = document.getElementById("div1");
    alert(divToGet.innerHTML);
});
