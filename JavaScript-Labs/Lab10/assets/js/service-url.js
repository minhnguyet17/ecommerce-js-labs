/* Dùng chung cho Exercise 10.9 và 10.10.
 *
 * Web service gốc của bài lab chỉ chạy qua HTTP:
 *     http://www.randyconnolly.com/funwebdev/services/travel/cities.php
 * GitHub Pages chạy qua HTTPS, và trình duyệt CHẶN mọi request HTTP từ trang HTTPS
 * (lỗi "Mixed Content"). Vì vậy:
 *   - Khi mở trang bằng http:// hoặc file:// (máy cá nhân) -> gọi web service gốc.
 *   - Khi mở trang bằng https:// (GitHub Pages)            -> gọi bản sao JSON
 *     (cities.json) đã được lưu lại từ chính web service đó, đặt cùng domain.
 */
var CITIES_SERVICE_URL = "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";
var CITIES_LOCAL_URL = "../assets/data/cities.json";

function getCitiesUrl() {
    return (window.location.protocol === "https:") ? CITIES_LOCAL_URL : CITIES_SERVICE_URL;
}
