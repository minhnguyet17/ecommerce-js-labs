/* Exercise 10.5 — Inserting DOM Elements */
/* put your DOM code here */

$(function () {
    // create a new DOM element
    var img = $('<img src="../assets/images/art/thumbs/13030.jpg" >');
    // and now add the new element relative to the panel
    var panel = $('.panel');

    // Mỗi bước trong đề thay dòng cuối bằng một phương thức khác.
    // Bỏ comment từng dòng để thử (chỉ để 1 dòng chạy tại một thời điểm):
    // panel.after(img);       // Step 2: chèn SAU panel (ngoài panel)
    // panel.before(img);      // Step 3: chèn TRƯỚC panel (ngoài panel)
    // panel.append(img);      // Step 4: chèn vào CUỐI bên trong panel
    // panel.prepend(img);     // Step 5: chèn vào ĐẦU bên trong panel
    // img.appendTo(panel);    // Step 6: tương đương append()
    // img.prependTo(panel);   // Step 7: tương đương prepend()
    img.insertBefore(panel);   // Step 8: tương đương before()
});
