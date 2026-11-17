/* Exercise 10.9 — GET Requests */

$(function () {
    $("#consume").click(function () {
        // URL gốc của đề: "http://www.randyconnolly.com/funwebdev/services/travel/cities.php"
        // getCitiesUrl() (xem ../assets/js/service-url.js) tự chọn URL phù hợp với http/https.
        var url = getCitiesUrl();
        $("#source").text("Data source: " + url);

        /* Step 3-4: duyệt dữ liệu JSON bằng vòng for, kiểm tra status
        $.get(url, function (data, status) {
            if (status == "success") {
                var list = "";
                // loop through JSON data and add each city to list
                for (var i = 0; i < data.length; i++) {
                    list += data[i].name + "<br>";
                }
                $("#results").html(list);
            }
        });
        */

        // Step 5: dùng $.each() để duyệt dữ liệu và tạo các <li>
        $("#results").html("<ul></ul>");
        $.get(url, function (data, status) {
            if (status == "success") {
                $.each(data, function (index, value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo("div#results ul");
                });
            }
        });
    });
});
