/* Exercise 9.6 — Debugging Events (dùng lại lab09-walkthrough05 theo đề) */

// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* Step 7: gắn sự kiện mouseover cho từng .movingDiv sau khi trang đã tải.
   Cách debug (Chrome): F12 -> Sources -> mở file này -> click số dòng có alert()
   để đặt breakpoint -> rê chuột lên một ô -> xem biến e và e.target trong
   khung Scope / Watch. */
window.addEventListener("load", function () {
    var divs = document.querySelectorAll(".movingDiv");
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function (e) {
            alert("triggered by " + e.target.id);
        });
    }
});
