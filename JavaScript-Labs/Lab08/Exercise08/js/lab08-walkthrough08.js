// define functions in this file
/* Exercise 8.8 — JavaScript Functions */

/* Step 1: hàm tự xuất HTML
function outputBox() {
    document.write("<div class='movingDiv' id='div1'>");
    document.write("This is div 1");
    document.write("</div>");
}
*/

/* Step 4: hàm trả về chuỗi thay vì tự xuất
function outputBox() {
    var box = "<div class='movingDiv' id='div1'>";
    box += "This is div 1";
    box += "</div>";
    return box;
}
*/

// Step 8: this variable has global scope
var boxClass = 'movingDiv';

// Step 6 + 8 + 10: hàm có tham số num
function outputBox(num) {
    // Step 10: bỏ từ khoá var -> box trở thành biến TOÀN CỤC (global).
    // Đây chính là ví dụ về lỗi thường gặp mà bài lab muốn minh hoạ:
    // nếu giữ "var box = ..." thì console.log(box) bên ngoài sẽ báo
    // "ReferenceError: box is not defined".
    box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}
