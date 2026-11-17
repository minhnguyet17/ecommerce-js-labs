/* Exercise 9.4 — Simple Event Handling */

/* Step 2: handler đơn giản
function simpleHandler(event) {
    alert("button was clicked");
}
*/

/* Step 5: ẩn/hiện đoạn văn bằng style.display
function simpleHandler(event) {
    var content = document.getElementById("content");
    if (btn.innerHTML == "Hide") {
        content.style.display = "none";
        btn.innerHTML = "Show";
    }
    else {
        content.style.display = "block";
        btn.innerHTML = "Hide";
    }
}
*/

// Step 6: dùng CSS3 transition + setTimeout để tạo hiệu ứng mờ dần
function simpleHandler(event) {
    var content = document.getElementById("content");
    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";
        // change the display mode after a 1000 millisecond delay
        setTimeout(function () {
            content.style.display = "none";
        }, 1000);
    }
    else {
        btn.innerHTML = "Hide";
        content.style.display = "block";

        // change the class after a 500 millisecond delay
        setTimeout(function () {
            content.className = "makeItNormal";
        }, 500);
    }
}

var btn = document.getElementById("testButton");
btn.addEventListener("click", simpleHandler);

// Step 3: anonymous function cho sự kiện mouseover
var img = document.getElementById("mainImage");
/* changes the style of the image when it is moused over */
img.addEventListener("mouseover", function (event) {
    img.className = "makeItGray";
});

// Step 4: remove the styling when mouse leaves image
img.addEventListener("mouseout", function (event) {
    img.className = "makeItNormal";
});
