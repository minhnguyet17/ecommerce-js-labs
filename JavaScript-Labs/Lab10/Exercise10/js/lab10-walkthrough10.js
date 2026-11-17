/* Exercise 10.10 — jqXHR Handling */

$(function () {
    $('.animLoading').hide();

    $("#consume").click(function () {
        loadCities(getCitiesUrl());
    });

    // Bổ sung: minh hoạ trường hợp lỗi (404) để thấy .fail() hoạt động
    $("#consumeFail").click(function () {
        loadCities("../assets/data/does-not-exist.json");
    });

    function loadCities(url) {
        $('.animLoading').show();
        $("div#results ul").empty();   // xoá kết quả cũ trước mỗi lần gọi

        $.get(url)
            // done will happen first
            .done(function (data) {
                $.each(data, function (index, value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo("div#results ul");
                });
            })
            // if error occurs will execute, but before always()
            .fail(function (xhr, status, error) {
                alert("failed loading data - status=" + status +
                      " error=" + error);
            })
            // always should be last
            .always(function (data) {
                $('.animLoading').fadeOut("slow");
            });
    }
});
