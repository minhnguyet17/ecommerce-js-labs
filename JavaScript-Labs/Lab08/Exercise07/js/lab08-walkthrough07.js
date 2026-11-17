/* Exercise 8.7 — Arrays */

// Step 2: tạo mảng các ngày trong tuần (Mon - Fri)
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
//document.write(daysOfWeek + "<br>");

// Step 3: push() thêm phần tử vào CUỐI mảng
daysOfWeek.push("Sat");
//document.write(daysOfWeek + "<br/>");

// Step 4: unshift() thêm phần tử vào ĐẦU mảng
daysOfWeek.unshift("Sun");
//document.write(daysOfWeek + "<br/>");   // Step 5: comment out

// Step 6-7: duyệt mảng để tạo dòng tiêu đề của bảng lịch
document.write("<table border=1>");
document.write("<tr>");
for (var i = 0; i < daysOfWeek.length; i++) {
    var day;
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";   // Tues, Thur được in nghiêng màu đỏ
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");

// Step 8: in các ngày 1 -> 30, giả sử tháng bắt đầu vào Chủ nhật (Sun)
var daysInMonth = 30;
var daysPerWeek = daysOfWeek.length;   // 7

for (var date = 1; date <= daysInMonth; date++) {
    // bắt đầu một tuần mới
    if ((date - 1) % daysPerWeek === 0) {
        document.write("<tr>");
    }

    document.write("<td>" + date + "</td>");

    // kết thúc tuần (đủ 7 ngày) hoặc kết thúc tháng
    if (date % daysPerWeek === 0 || date === daysInMonth) {
        // thêm các ô trống cho tuần cuối chưa đủ 7 ngày
        var remaining = daysPerWeek - (date % daysPerWeek);
        if (remaining < daysPerWeek) {
            for (var k = 0; k < remaining; k++) {
                document.write("<td></td>");
            }
        }
        document.write("</tr>");
    }
}
document.write("</table>");
