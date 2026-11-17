/* Exercise 10.1 — Set Up jQuery
   Kiểm tra jQuery đã được nạp thành công hay chưa và nạp từ đâu (CDN hay file local). */
if (window.jQuery) {
    var source = window.jQueryLoadedFromCDN ? "CDN (code.jquery.com)" : "local file (../assets/js/)";
    $('#msgArea').val("jQuery " + $.fn.jquery + " loaded successfully from " + source);
    console.log("jQuery version:", $.fn.jquery, "| source:", source);
} else {
    document.getElementById("msgArea").value = "jQuery was NOT loaded!";
}
