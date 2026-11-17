/* Exercise 10.2 — Basic Selectors */
/* try the different selection calls here */

// Step 2: chọn theo id và đặt giá trị cho <textarea>
var msg = $('#msgArea');
msg.val("here is some new text");

// Step 3: html() đọc/ghi nội dung HTML của phần tử.
// Ghi chú: đề bài dùng $('#first') — selector này sẽ thay TOÀN BỘ nội dung khối #first
// (kể cả <textarea>), khiến Step 4 không còn phần tử để thao tác.
// Vì vậy ở đây chọn tiêu đề #pageTitle (nằm trong #first) để giữ lại kết quả các bước khác.
// $('#first').html("new Title");
$('#pageTitle').html("new Title");

// Step 4: attr() đọc/ghi thuộc tính HTML
$('#msgArea').val("My class is " + $('#msgArea').attr("class"));

// Step 5: chọn TẤT CẢ <button> — không cần vòng lặp
var buttons = $('button');
buttons.css('background-color', 'red');

// Step 6: jQuery luôn trả về một tập hợp, kể cả khi chỉ có 1 phần tử
var temp = $('body');
temp.css("background-color", "ivory");

// Step 7: chaining — chọn theo class rồi thêm class "selected"
$('.center-icons').addClass('selected');
