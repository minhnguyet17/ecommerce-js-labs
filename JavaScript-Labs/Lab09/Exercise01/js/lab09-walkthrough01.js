/* Exercise 9.1 — Basic DOM Selection */

// Step 2: getElementById + thuộc tính value của <textarea>
var msg = document.getElementById("msgArea");
msg.value = "here is some text";

// Step 3: innerHTML (dùng biến tạm)
var title = document.getElementById("pageTitle");
title.innerHTML = "New Title";

// Step 4: cùng kết quả nhưng không cần biến tạm
document.getElementById("pageTitle").innerHTML = "Even newer title";

// Step 5: innerHTML trả về toàn bộ HTML bên trong node
msg.value = document.getElementById("first").innerHTML;

// Step 6: innerText chỉ trả về phần chữ (đã bỏ thẻ)
msg.value = document.getElementById("first").innerText;

// Step 7: getAttribute đọc giá trị một thuộc tính
msg.value = "My class is " + msg.getAttribute("class");

// Step 8: getElementsByTagName trả về một danh sách node
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";

// Step 9: lấy nội dung tất cả <span>
elem = document.getElementsByTagName("span");
for (var i = 0; i < elem.length; i++) {
    document.getElementById("msgArea").value += "\n" + elem[i].innerText;
}

// Step 10: getElementsByClassName
document.getElementById("msgArea").value = "";
var counts = document.getElementsByClassName("count-number");
for (var i = 0; i < counts.length; i++) {
    document.getElementById("msgArea").value += "\n" + counts[i].innerText;
}

// Step 11: querySelector -> phần tử ĐẦU TIÊN khớp với CSS selector
var ps = document.querySelector("#first p");
document.getElementById("msgArea").value = ps.innerHTML;

// Step 12: querySelectorAll -> TẤT CẢ phần tử khớp
ps = document.querySelectorAll("#first p");
for (var i = 0; i < ps.length; i++) {
    document.getElementById("msgArea").value += ps[i].innerHTML + "\n";
}

// Step 13: setAttribute -> ẩn textarea bằng class "hidden" của Bootstrap
// (comment dòng dưới nếu muốn chụp lại kết quả của các bước trước trong textarea)
document.getElementById("msgArea").setAttribute("class", "hidden");

// Step 14: thay đổi style trực tiếp
document.getElementById("features").style.backgroundColor = "green";
