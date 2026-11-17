/* Exercise 10.3 — Advanced Selectors */
/* try the different advanced selection calls here */

// Step 2-3: chọn mọi ô password (đã comment theo yêu cầu Step 3)
// $(':password').css('background-color', 'yellow');

// Step 4: chọn mọi phần tử con thứ 4, 8, 12... bên trong <form>
$('form :nth-child(4n)').css('background-color', 'yellow');

// Step 5: chọn các <label> có chứa chữ "word" (Password, Password Again)
$('label:contains("word")').css("color", "black");
