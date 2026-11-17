/* Exercise 9.2 — DOM Family Relations */

/* Steps 2-5: gõ thử trong Console của trình duyệt:
     document.getElementById("first")
     document.getElementById("first").firstChild              -> #text (khoảng trắng)
     document.getElementById("first").firstChild.nextSibling  -> <h1 id="pageTitle">
     document.getElementById("first").parentNode             -> <div class="container">
*/

// Step 6: duyệt các node con của <div id="stories">
var stories = document.getElementById("stories");
for (var i = 0; i < stories.childNodes.length; i++) {
    console.log("child " + i + " =" + stories.childNodes[i] +
                " nodeType=" + stories.childNodes[i].nodeType);
}

// Step 7: đổi màu nền cho các node KHÔNG phải text node
// nodeType: 1 = ELEMENT_NODE, 3 = TEXT_NODE, 8 = COMMENT_NODE
var colors = ["#FFE0B2", "#C8E6C9", "#BBDEFB"];
var colorIndex = 0;
for (var i = 0; i < stories.childNodes.length; i++) {
    var node = stories.childNodes[i];
    if (node.nodeType === 1) {
        node.style.backgroundColor = colors[colorIndex % colors.length];
        colorIndex++;
    }
}
