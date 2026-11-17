/* Exercise 10.6 — Simple jQuery Animation */
/* put your animation code here */

$(function () {
    // Step 2: hiện dần ảnh trong 1000ms
    $("#btnFadeIn").click(function () {
        $("figure").fadeIn(1000);
    });
    // Step 3: ẩn dần ảnh trong 1000ms
    $("#btnFadeOut").click(function () {
        $("figure").fadeOut(1000);
    });
    // Step 4: đảo trạng thái hiện/ẩn
    $("#btnFade").click(function () {
        $("figure").fadeToggle(500);
    });
    // Step 5: hiệu ứng trượt
    $("#btnSlideDown").click(function () {
        $("figure").slideDown("slow");
    });
    $("#btnSlideUp").click(function () {
        $("figure").slideUp("slow");
    });
    $("#btnSlide").click(function () {
        $("figure").slideToggle(2000);
    });
});
