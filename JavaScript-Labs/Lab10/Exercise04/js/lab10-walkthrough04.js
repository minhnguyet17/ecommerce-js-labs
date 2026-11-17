/* Exercise 10.4 — jQuery Listeners */
/* put your event code here */

/* Step 2: phương thức rút gọn click()
$(".panel").click(function() {
    $("#message").html("You clicked in the panel");
});
*/

/* Step 3: on() dùng được cho mọi loại sự kiện
$(".panel").on("click", function() {
    $("#message").html("You clicked in the panel");
});
*/

/* Step 4: $(function(){...}) = sự kiện document ready
$(function () {
    $(".panel").on("click", function() {
        $("#message").html("You clicked in the panel");
    });
});
*/

// Step 5: gắn nhiều handler bằng chaining; click sẽ tắt (off) sự kiện mousemove
$(function () {
    // chaining handlers
    $(".panel")
        .on("mousemove", function (e) {
            $("#message").html("x=" + e.pageX + " y=" + e.pageY);
        })
        .on("mouseleave", function (e) {
            $("#message").html("goodbye!");
        })
        .on("click", function () {
            $("#message").html("stopped move reporting");
            $(".panel").off("mousemove");
        });
});
