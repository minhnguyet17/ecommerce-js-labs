/* =========================================================
   Demo TMĐT — "Art Print Shop"
   Áp dụng kiến thức của cả 3 bài Lab vào chức năng website thương mại điện tử:
     - Lab 08: constructor function, mảng đối tượng, hàm truyền làm tham số (tính VAT)
     - Lab 09: createElement / innerHTML, addEventListener, e.target, validate form
     - Lab 10: jQuery selectors, $.getJSON + jqXHR (done/fail/always), fade / slide
   ========================================================= */
(function ($) {
    "use strict";

    var VAT_RATE = 0.1;                       // thuế GTGT 10%
    var STORAGE_KEY = "jslabs-demo-cart";     // lưu giỏ hàng trong trình duyệt

    // Dữ liệu dự phòng khi không tải được data/products.json
    // (vd: mở file trực tiếp bằng file:// thay vì qua web server)
    var FALLBACK_PRODUCTS = [
        { id: "07020",  name: "Tự do dẫn dắt nhân dân", artist: "Eugène Delacroix", price: 450000, image: "images/shop/07020.jpg" },
        { id: "13030",  name: "Mẹ của Whistler", artist: "James McNeill Whistler", price: 390000, image: "images/shop/13030.jpg" },
        { id: "05030",  name: "Cái chết của Marat", artist: "Jacques-Louis David", price: 350000, image: "images/shop/05030.jpg" },
        { id: "06010",  name: "Mademoiselle Rivière", artist: "Jean-Auguste-Dominique Ingres", price: 320000, image: "images/shop/06010.jpg" },
        { id: "120010", name: "Eleonora xứ Toledo", artist: "Agnolo Bronzino", price: 420000, image: "images/shop/120010.jpg" }
    ];

    var products = [];   // mảng các đối tượng Product
    var cart = {};       // { productId: quantity }

    /* ---------- Lab 08: constructor function ---------- */
    function Product(data) {
        this.id = data.id;
        this.name = data.name;
        this.artist = data.artist;
        this.price = data.price;
        this.image = data.image;
    }

    function formatVND(amount) {
        return amount.toLocaleString("vi-VN") + " ₫";
    }

    /* ---------- Lab 08 (Exercise 8.9): truyền hàm làm tham số ---------- */
    function calculateTax(amount, rate) {
        return amount * rate();
    }

    function findProduct(id) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].id === id) return products[i];
        }
        return null;
    }

    /* ---------- Lưu / đọc giỏ hàng (có thể bị chặn ở chế độ ẩn danh) ---------- */
    function saveCart() {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch (e) { /* bỏ qua */ }
    }
    function loadCart() {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch (e) { return {}; }
    }

    /* ---------- Lab 09: tạo phần tử DOM cho danh sách sản phẩm ---------- */
    function renderProducts() {
        var grid = document.getElementById("shop-grid");
        grid.innerHTML = "";
        products.forEach(function (p) {
            var card = document.createElement("article");
            card.className = "product";
            card.innerHTML =
                '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
                '<div class="product-body">' +
                '  <h4>' + p.name + '</h4>' +
                '  <p class="artist">' + p.artist + '</p>' +
                '  <div class="product-foot">' +
                '    <strong>' + formatVND(p.price) + '</strong>' +
                '    <button type="button" class="btn btn-primary btn-sm add-to-cart" data-id="' + p.id + '">+ Thêm vào giỏ</button>' +
                '  </div>' +
                '</div>';
            grid.appendChild(card);
        });
    }

    /* ---------- Giỏ hàng ---------- */
    function renderCart() {
        var $list = $("#cart-items").empty();
        var subtotal = 0;
        var count = 0;

        $.each(cart, function (id, qty) {
            var p = findProduct(id);
            if (!p) return;
            subtotal += p.price * qty;
            count += qty;
            $list.append(
                '<li class="cart-row" data-id="' + id + '">' +
                '  <img src="' + p.image + '" alt="">' +
                '  <div class="cart-info"><b>' + p.name + '</b><small>' + formatVND(p.price) + '</small></div>' +
                '  <div class="qty">' +
                '    <button type="button" class="qty-btn" data-action="dec" aria-label="Giảm">−</button>' +
                '    <span>' + qty + '</span>' +
                '    <button type="button" class="qty-btn" data-action="inc" aria-label="Tăng">+</button>' +
                '  </div>' +
                '  <button type="button" class="remove-btn" data-action="remove" aria-label="Xoá">✕</button>' +
                '</li>'
            );
        });

        var tax = calculateTax(subtotal, function () { return VAT_RATE; });
        $("#cart-empty").toggle(count === 0);
        $("#cart-summary").toggle(count > 0);
        $("#cart-subtotal").text(formatVND(subtotal));
        $("#cart-tax").text(formatVND(tax));
        $("#cart-total").text(formatVND(subtotal + tax));
        $("#cart-count").text(count);
        saveCart();
    }

    function addToCart(id) {
        cart[id] = (cart[id] || 0) + 1;
        renderCart();
        var p = findProduct(id);
        showToast("Đã thêm “" + p.name + "” vào giỏ hàng");
        // Lab 10: hiệu ứng nhấn mạnh số lượng trên biểu tượng giỏ
        $("#cart-count").stop(true, true).fadeOut(100).fadeIn(250);
    }

    /* ---------- Lab 10: thông báo dạng toast bằng fadeIn / fadeOut ---------- */
    var toastTimer = null;
    function showToast(message) {
        var $toast = $("#shop-toast");
        $toast.text(message).stop(true, true).fadeIn(200);
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () { $toast.fadeOut(400); }, 1800);
    }

    /* ---------- Lab 10: tải danh sách sản phẩm bằng GET request (jqXHR) ---------- */
    function loadProducts() {
        $("#shop-loading").show();
        $.getJSON("data/products.json")
            .done(function (data) {
                products = $.map(data, function (item) { return new Product(item); });
                $("#shop-source").text("Danh sách sản phẩm được tải bằng $.getJSON(\"data/products.json\").");
            })
            .fail(function (xhr, status, error) {
                products = $.map(FALLBACK_PRODUCTS, function (item) { return new Product(item); });
                $("#shop-source").text("Không tải được data/products.json (" + status +
                    "), đang dùng dữ liệu dự phòng — hãy mở trang qua web server.");
            })
            .always(function () {
                $("#shop-loading").fadeOut("fast");
                renderProducts();
                cart = loadCart();
                renderCart();
            });
    }

    /* ---------- Lab 09 + 10: kiểm tra form đăng ký ---------- */
    var rules = {
        fullname: function (v) { return v.trim().length >= 2 ? "" : "Vui lòng nhập họ và tên."; },
        email: function (v) {
            if (!v.trim()) return "Vui lòng nhập email.";
            return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Email không đúng định dạng (vd: ten@gmail.com).";
        },
        phone: function (v) {
            if (!v.trim()) return "Vui lòng nhập số điện thoại.";
            return /^0\d{9}$/.test(v.replace(/\s/g, "")) ? "" : "Số điện thoại gồm 10 chữ số, bắt đầu bằng 0.";
        },
        password: function (v) {
            if (v.length < 8) return "Mật khẩu tối thiểu 8 ký tự.";
            return (/[A-Za-z]/.test(v) && /\d/.test(v)) ? "" : "Mật khẩu cần có cả chữ và số.";
        },
        confirm: function (v) {
            if (!v) return "Vui lòng nhập lại mật khẩu.";
            return v === $("#reg-password").val() ? "" : "Mật khẩu nhập lại không khớp.";
        }
    };

    function validateField($input) {
        var name = $input.attr("name");
        var message = rules[name] ? rules[name]($input.val()) : "";
        $input.toggleClass("invalid", message !== "").toggleClass("valid", message === "");
        $input.siblings(".field-error").text(message);
        return message === "";
    }

    /* ---------- Gắn sự kiện khi DOM sẵn sàng (Lab 10: document ready) ---------- */
    $(function () {
        if (!document.getElementById("shop-grid")) return;

        loadProducts();

        // Lab 09: event delegation — một listener cho mọi nút "Thêm vào giỏ"
        document.getElementById("shop-grid").addEventListener("click", function (e) {
            var btn = e.target.closest(".add-to-cart");
            if (btn) addToCart(btn.getAttribute("data-id"));
        });

        // Tăng / giảm / xoá trong giỏ hàng
        $("#cart-items").on("click", "button", function () {
            var id = $(this).closest(".cart-row").attr("data-id");
            var action = $(this).data("action");
            if (action === "inc") cart[id]++;
            if (action === "dec") cart[id]--;
            if (action === "remove" || cart[id] <= 0) delete cart[id];
            renderCart();
        });

        // Lab 10: thu gọn / mở rộng giỏ hàng bằng slideToggle
        $("#cart-toggle").on("click", function () {
            $("#cart-body").slideToggle(250);
            $(this).text($(this).text() === "Thu gọn" ? "Mở rộng" : "Thu gọn");
        });

        $("#checkout-btn").on("click", function () {
            $("html, body").animate({ scrollTop: $("#register-card").offset().top - 80 }, 500);
            $("#reg-fullname").trigger("focus");
        });

        // Lab 09 (Exercise 9.7): kiểm tra lại khi rời khỏi ô nhập (blur) và khi đang gõ
        $("#register-form input")
            .on("blur", function () { validateField($(this)); })
            .on("input", function () { if ($(this).hasClass("invalid")) validateField($(this)); });

        // Lab 09 (Exercise 9.8): chặn submit khi dữ liệu chưa hợp lệ
        $("#register-form").on("submit", function (e) {
            e.preventDefault();   // demo: không gửi dữ liệu đi đâu cả
            var allValid = true;
            $(this).find("input").each(function () {
                if (!validateField($(this))) allValid = false;
            });

            var $result = $("#register-result").hide();
            if (!allValid) {
                $result.removeClass("success").addClass("error")
                       .text("Vui lòng sửa các ô được đánh dấu đỏ.").slideDown(200);
                $(this).find(".invalid").first().trigger("focus");
                return;
            }

            var itemCount = 0;
            $.each(cart, function (id, qty) { itemCount += qty; });
            var name = $("#reg-fullname").val().trim();
            $result.removeClass("error").addClass("success")
                   .html("Đăng ký thành công! Chào <b>" + $("<span>").text(name).html() + "</b>" +
                         (itemCount ? " — giỏ hàng của bạn có " + itemCount + " sản phẩm, tổng " + $("#cart-total").text() + "." : "."))
                   .slideDown(250);
            this.reset();
            $(this).find("input").removeClass("valid invalid");
        });
    });
})(jQuery);
