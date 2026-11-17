/* Exercise 9.7 — Working with Forms */

// Step 2: được gọi mỗi khi một ô input nhận (focus) hoặc mất (blur) con trỏ
function setBackground(e) {
    if (e.type == "focus") {
        e.target.style.backgroundColor = "#FFE393";
    }
    else if (e.type == "blur") {
        e.target.style.backgroundColor = "white";
    }
}

// Step 3: sau khi trang tải xong, gắn handler cho các ô text/password
window.addEventListener("load", function () {
    var cssSelector = "input[type=text],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    for (var i = 0; i < fields.length; i++) {
        fields[i].addEventListener("focus", setBackground);
        fields[i].addEventListener("blur", setBackground);
    }
});
