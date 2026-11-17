# JavaScript Labs — Phát triển ứng dụng Thương mại điện tử

Kết quả thực hành **Chương 4: JavaScript** gồm 03 bài Lab: Lab 08 (Language Foundations), Lab 09 (DOM and Events), Lab 10 (jQuery).

## 1. Thông tin sinh viên

| | |
|---|---|
| Họ và tên | Nguyễn Thị Minh Nguyệt |
| Mã số sinh viên | 87251020135 |
| Lớp học phần | 26C1INF50902701 |
| GitHub | https://github.com/minhnguyet17 |

## 2. Mục tiêu thực hiện

- Nắm vững cú pháp và các thành phần nền tảng của JavaScript: biến, kiểu dữ liệu, hàm, đối tượng, mảng.
- Thao tác với DOM và xử lý sự kiện người dùng để xây dựng giao diện có tính tương tác.
- Sử dụng thư viện jQuery để viết mã ngắn gọn hơn, tạo hiệu ứng và gửi request bất đồng bộ.
- Liên hệ các kỹ thuật trên với chức năng thực tế của website TMĐT: kiểm tra form đăng ký, giỏ hàng, cập nhật sản phẩm, hiệu ứng tương tác.

## 3. Đường dẫn GitHub Pages

| Trang | Đường dẫn |
|---|---|
| Trang chủ | https://minhnguyet17.github.io/ecommerce-js-labs/JavaScript-Labs/ |
| Lab 08 | https://minhnguyet17.github.io/ecommerce-js-labs/JavaScript-Labs/Lab08/ |
| Lab 09 | https://minhnguyet17.github.io/ecommerce-js-labs/JavaScript-Labs/Lab09/ |
| Lab 10 | https://minhnguyet17.github.io/ecommerce-js-labs/JavaScript-Labs/Lab10/ |

## 4. Cấu trúc thư mục

```text
JavaScript-Labs/
├── index.html              # Trang chủ / portfolio cá nhân
├── README.md
├── css/
│   ├── style.css           # Giao diện trang chủ và trang danh sách Lab
│   └── labbar.css          # Thanh điều hướng nhỏ trên mỗi trang Exercise
├── js/
│   ├── main.js             # Tương tác trang chủ (menu mobile, đếm số từ...)
│   └── shop-demo.js        # Demo TMĐT: sản phẩm, giỏ hàng, form đăng ký
├── data/
│   └── products.json       # Dữ liệu sản phẩm cho demo (tải bằng $.getJSON)
├── images/
│   ├── avatar.svg  favicon.svg
│   └── shop/               # Ảnh tranh dùng cho demo cửa hàng
├── Lab08/
│   ├── index.html          # Danh sách Exercise 8.1 – 8.11
│   ├── assets/             # CSS, hình cờ quốc gia dùng chung của Lab 08
│   ├── Exercise01/index.html
│   ├── Exercise02/index.html
│   ├── ...
│   └── Exercise11/
│       ├── index.html
│       └── js/lab08-walkthrough11.js
├── Lab09/
│   ├── index.html          # Danh sách Exercise 9.1 – 9.8
│   ├── assets/             # CSS, hình ảnh dùng chung của Lab 09
│   └── Exercise01/ ... Exercise08/
└── Lab10/
    ├── index.html          # Danh sách Exercise 10.1 – 10.10
    ├── assets/
    │   ├── css/  images/
    │   ├── js/jquery-3.1.1.min.js   # jQuery dự phòng khi CDN lỗi
    │   ├── js/service-url.js        # chọn URL web service cho 10.9 / 10.10
    │   └── data/cities.json         # bản sao dữ liệu web service
    └── Exercise01/ ... Exercise10/
```

Mỗi Exercise nằm trong một thư mục riêng, gồm `index.html` và (nếu có) thư mục `js/` chứa mã JavaScript của bài đó. Tài nguyên dùng chung của từng Lab đặt trong `LabXX/assets/`.

## 5. Nội dung từng Lab

### Lab 08 — JavaScript 1: Language Foundations
| Exercise | Nội dung |
|---|---|
| 8.1 | Enabling/Disabling JavaScript — kiểm tra trạng thái bật/tắt JS |
| 8.2 | Embedded JavaScript — `alert()` trong `<head>` |
| 8.3 | External JavaScript — file `hello.js`, `document.write()` |
| 8.4 | Using NoScript |
| 8.5 | Using the Browser Console — đọc lỗi, `console.log/warn/error` |
| 8.6 | Built-in Objects — String (`==` vs `===`), Date, Math |
| 8.7 | Arrays — `push`, `unshift`, vòng lặp tạo bảng lịch tháng |
| 8.8 | Functions — tham số, giá trị trả về, phạm vi biến |
| 8.9 | Functions as Objects — hàm lồng, hàm ẩn danh, truyền hàm làm tham số |
| 8.10 | Creating Objects — `new Object()`, `{}`, object literal, constructor |
| 8.11 | Arrays of Objects — bracket notation, `for...in` |

### Lab 09 — JavaScript 2: DOM and Events
| Exercise | Nội dung |
|---|---|
| 9.1 | Basic DOM Selection — `getElementById`, `querySelector(All)`, `innerHTML`... |
| 9.2 | DOM Family Relations — `childNodes`, `nodeType`, `parentNode` |
| 9.3 | Modifying the DOM — `createElement`, `appendChild`, `removeChild` |
| 9.4 | Simple Event Handling — click / mouseover / mouseout, `setTimeout` |
| 9.5 | Responding to Load Events — sự kiện `load` |
| 9.6 | Debugging Events — breakpoint, `e.target` |
| 9.7 | Working with Forms — focus / blur |
| 9.8 | Form Validation — `submit`, `preventDefault()`, hiển thị lỗi |

### Lab 10 — JavaScript 3: jQuery
| Exercise | Nội dung |
|---|---|
| 10.1 | Set Up jQuery — CDN + fallback file local |
| 10.2 | Basic Selectors — `val()`, `html()`, `attr()`, `css()`, `addClass()` |
| 10.3 | Advanced Selectors — `:password`, `:nth-child(4n)`, `:contains()` |
| 10.4 | jQuery Listeners — `on()`, `off()`, document ready, chaining |
| 10.5 | Inserting DOM Elements — `after/before/append/prepend/...` |
| 10.6 | Simple Animation — fade / slide |
| 10.7 | More Animation — popup xem trước ảnh theo vị trí chuột |
| 10.8 | Complex Animations — `animate()` nối chuỗi |
| 10.9 | GET Requests — `$.get()`, `$.each()` |
| 10.10 | jqXHR Handling — `.done()`, `.fail()`, `.always()` |

> **Ghi chú Exercise 10.9 / 10.10:** web service gốc (`http://www.randyconnolly.com/...`) chỉ hỗ trợ HTTP. Trình duyệt chặn request HTTP từ trang HTTPS (Mixed Content), nên khi chạy trên GitHub Pages trang sẽ đọc file `Lab10/assets/data/cities.json` (bản sao dữ liệu từ chính web service đó). Khi mở trên máy cá nhân, trang vẫn gọi web service gốc.

### Demo ứng dụng TMĐT (trên trang chủ)
Cửa hàng tranh nhỏ áp dụng kiến thức cả 3 Lab: danh sách sản phẩm tải bằng `$.getJSON` (Lab 10), tạo bằng constructor & mảng đối tượng (Lab 08) và `createElement` (Lab 09); giỏ hàng tăng/giảm/xoá, tự tính VAT 10% (Lab 08 – hàm truyền làm tham số), hiệu ứng fade/slide (Lab 10); form đăng ký kiểm tra họ tên, email, số điện thoại, mật khẩu (Lab 09 – Form Validation).

## 6. Hướng dẫn truy cập

1. Mở **trang chủ** theo đường dẫn GitHub Pages ở mục 3.
2. Ở mục **Các bài thực hành**, chọn Lab 08 / Lab 09 / Lab 10.
3. Trang của mỗi Lab liệt kê toàn bộ Exercise; bấm vào một Exercise để xem kết quả chạy.
4. Trên mỗi trang Exercise, thanh điều hướng phía trên có liên kết quay lại Lab hoặc trang chủ.
5. Một số Exercise cần mở **DevTools (F12) → Console/Sources** để xem kết quả (8.5, 8.8, 9.2, 9.6).

**Chạy trên máy cá nhân:** clone repository rồi mở `JavaScript-Labs/index.html` bằng trình duyệt, hoặc dùng extension *Live Server* của VS Code.
