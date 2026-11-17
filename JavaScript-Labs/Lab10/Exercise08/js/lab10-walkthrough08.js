/* Exercise 10.8 — Complex Animations */
/* put your animation code here */

$(function () {

    /* Step 2: animate một thuộc tính CSS
    $("button").click(function(){
        $("#box").animate({left: '495px'});
    });
    */

    /* Step 3: animate nhiều thuộc tính cùng lúc
    $("button").click(function(){
        $("#box").animate({
            left: '495px',
            opacity: '1',
            height: '50px'
        });
    });
    */

    // Step 4: chuỗi 3 animation — mỗi animation chạy sau khi cái trước kết thúc
    $("button").click(function () {
        $("#box")
            .animate({
                left: '495px',
                opacity: '1',
                height: '50px'
            })
            .animate({ top: '400px', opacity: '0.2' })
            .animate({ height: '200px' }, 2000);
    });
});
