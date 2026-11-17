/* =========================================================
   JavaScript Labs — tương tác cho trang chủ
   Vận dụng kiến thức Lab 09: DOM selection, event listener, classList...
   ========================================================= */
document.addEventListener("DOMContentLoaded", function () {

    // 1. Nút menu trên điện thoại: bật/tắt danh sách điều hướng
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".site-nav");
    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            var isOpen = nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", isOpen);
        });
        // đóng menu sau khi chọn một mục
        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // 2. Đánh dấu mục menu tương ứng với section đang xem
    var links = document.querySelectorAll('.site-nav a[href^="#"]');
    var sections = [];
    links.forEach(function (link) {
        var target = document.querySelector(link.getAttribute("href"));
        if (target) sections.push({ link: link, el: target });
    });
    function updateActive() {
        var y = window.scrollY + 100;
        var current = null;
        sections.forEach(function (s) {
            if (s.el.offsetTop <= y) current = s;
        });
        links.forEach(function (l) { l.classList.remove("active"); });
        if (current) current.link.classList.add("active");
    }
    window.addEventListener("scroll", updateActive);
    updateActive();

    // 3. Đếm số từ của đoạn tự đánh giá (yêu cầu 100–150 từ)
    var reflection = document.getElementById("reflection-text");
    var counter = document.getElementById("reflection-count");
    if (reflection && counter) {
        var words = reflection.innerText.trim().split(/\s+/).filter(Boolean).length;
        counter.textContent = "Số từ: " + words + " (yêu cầu 100–150 từ)";
        counter.className = "word-count " + (words >= 100 && words <= 150 ? "ok" : "warn");
    }

    // 4. Năm hiện tại ở footer (đối tượng Date — Lab 08)
    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
});
