// Exercise 8.5 — Using the Browser Console
//
// Step 4: cố tình viết sai chính tả để tạo lỗi cú pháp/tham chiếu:
//    doccumment.write("this text was written from JS");
//    -> Console báo: "Uncaught ReferenceError: doccumment is not defined"
// Step 7: sửa lại thành "document" như bên dưới.
document.write("this text was written from JS");
var count = 1;
document.write(" Count = " + count);

count++;
var output = "<br>Count = " + count;
document.write(output);

// Steps 9-12: gõ thử trong Console của trình duyệt:
//    count                 -> 2
//    output                -> "<br>Count = 2"
//    var temp = count * 7; -> undefined
//    temp                  -> 14
