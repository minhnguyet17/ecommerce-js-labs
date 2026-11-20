# CSS nâng cao – Lab 07: Advanced CSS: Layout

## Thông tin sinh viên

| Thông tin | Nội dung |
|---|---|
| Họ và tên | Nguyễn Thị Minh Nguyệt |
| Mã số sinh viên | 87251020135 |
| Lớp học phần | Phát triển ứng dụng TMĐT - 26C1INF50902701 |
| GitHub Repository | https://github.com/minhnguyet17/ecommerce-js-labs |
| GitHub Pages | https://minhnguyet17.github.io/ecommerce-js-labs/CSS-NangCao/ |

## Mục tiêu thực hiện Lab 07

- Điều khiển cách các phần tử hiển thị trong document flow và thay đổi cách hiển thị bằng `display`.
- Định vị phần tử bằng relative / absolute positioning, kiểm soát thứ tự chồng lớp bằng `z-index`.
- Sử dụng `float` và `clear` để bố trí phần tử, xây dựng bố cục hai cột và ba cột.
- Thiết kế giao diện responsive bằng media queries và viewport.
- Tạo hiệu ứng bằng CSS transforms, transitions, filters và animations.
- Ứng dụng Bootstrap grid system và các component có sẵn.

## Cấu trúc thư mục

Thư mục `CSS-NangCao/` nằm trong repository `ecommerce-js-labs` cùng với `JavaScript-Labs/` (Lab 08 – 10) của các bài thực hành trước; nội dung cũ được giữ nguyên. Trang chủ CSS-NangCao dùng chung theme (màu, font, bố cục) với JavaScript-Labs.

```
CSS-NangCao/
├── index.html                 # Trang chủ portfolio: thông tin cá nhân, giới thiệu, liên kết Exercise, tổng kết
├── README.md
├── assets/
│   ├── style.css              # CSS trang chủ + trang danh sách Lab 07 (cùng theme với JavaScript-Labs)
│   ├── favicon.svg
│   └── avatar.jpg             # Ảnh đại diện
└── Lab07/
    ├── index.html             # Trang danh sách 19 Exercise
    ├── css/lab07-common.css   # CSS dùng chung của các Exercise (font, thanh điều hướng nav.labbar)
    ├── bootstrap/             # Bootstrap 3.4.1 (css, js, fonts) + jQuery 1.12.4
    ├── images/                # Ảnh dùng trong các Exercise
    ├── Exercise01/            # lab07-exercise01.html + lab07-exercise01.css
    ├── ...
    ├── Exercise12/            # lab07-exercise12.html + .css + -desktop.css + -mobile.css
    ├── Exercise13/            # Phát triển tiếp từ bộ file 7.12: thêm viewport + menu select cho mobile
    ├── ...
    └── Exercise19/            # Bootstrap: lab07-exercise19.html + lab07-exercise19.css
```

## Nội dung các nhóm Exercise

| Nhóm | Exercise | Nội dung |
|---|---|---|
| 1 | 7.1 – 7.4 | Document flow (`display`), relative positioning, absolute positioning, z-index và stacking context |
| 2 | 7.5 – 7.9 | `float: left/right`, float trong container (overflow, clearfix), gallery nhiều ảnh float, `clear`, chú thích/huy hiệu chồng lên ảnh bằng positioning |
| 3 | 7.10 – 7.13 | Bố cục hai cột (float + margin), ba cột (absolute positioning), media queries với stylesheet desktop/mobile riêng, khai báo viewport và đổi menu thành `<select>` trên mobile |
| 4 | 7.14 – 7.18 | `transform` (rotate, skew, translate, scale), `transition` và timing function, nhiều transition kết hợp delay, 11 hàm `filter`, `@keyframes` với duration, iteration-count, delay, shorthand |
| 5 | 7.19 | Bootstrap 3: navbar, jumbotron, grid 12 cột, nested columns, thumbnail, panel, list-group, button |

> Ghi chú: Exercise 7.13 được thực hiện trên bộ file của 7.12 (đúng hướng dẫn). Thư mục `Exercise13/` là bản sao của 7.12 sau khi bổ sung viewport và điều chỉnh navigation, để có thể so sánh trước/sau.

## Đường dẫn GitHub Pages

- Trang chủ: https://minhnguyet17.github.io/ecommerce-js-labs/CSS-NangCao/
- Danh sách Exercise: https://minhnguyet17.github.io/ecommerce-js-labs/CSS-NangCao/Lab07/
- Ví dụ một Exercise: https://minhnguyet17.github.io/ecommerce-js-labs/CSS-NangCao/Lab07/Exercise12/

## Hướng dẫn truy cập các bài thực hành

1. Mở trang chủ `CSS-NangCao/index.html` (hoặc link GitHub Pages ở trên).
2. Ở mục **Danh sách Exercise**, chọn bài cần xem; hoặc vào `Lab07/index.html` để xem danh sách đầy đủ.
3. Mỗi trang Exercise có liên kết quay về danh sách Lab 07 và trang chủ.
4. Với các bài float, multi-column, media queries (7.7, 7.8, 7.10 – 7.13, 7.19) nên thay đổi kích thước cửa sổ trình duyệt hoặc dùng DevTools (Ctrl + Shift + M) để xem chế độ mobile.
5. Với các bài transitions/filters (7.14 – 7.17) rê chuột lên ảnh/thẻ để xem hiệu ứng.

Tất cả đường dẫn trong project đều là đường dẫn tương đối nên chạy được cả khi mở file trực tiếp lẫn khi triển khai trên GitHub Pages.
