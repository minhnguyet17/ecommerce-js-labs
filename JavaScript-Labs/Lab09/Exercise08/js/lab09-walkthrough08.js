/* Exercise 9.8 — Form Validation */

/* responsible for setting up event listeners on page */
function init() {
    document.getElementById("sampleForm").addEventListener("submit",
                                                           checkForEmptyFields);
}

/* initialize handlers once page is ready */
window.addEventListener("load", init);

/* ensures form fields are not empty */
function checkForEmptyFields(e) {
    // Step 3: hide the error message element
    var errorArea = document.getElementById("errors");
    errorArea.className = "hidden";

    var cssSelector = "input[type=text],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    // loop thru the input elements looking for empty values
    var fieldList = [];
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value == null || fields[i].value == "") {
            // since a field is empty prevent the form submission
            e.preventDefault();
            fieldList.push(fields[i]);
        }
    }

    // now set up the error message
    var msg = "The following fields can't be empty: ";
    if (fieldList.length > 0) {
        for (var i = 0; i < fieldList.length; i++) {
            msg += fieldList[i].id + ",";
        }
        // Step 1 (cũ): alert(msg);
        // Step 3: hiển thị lỗi trong <div id="errors"> thay vì hộp thoại alert
        errorArea.innerHTML = "<p>" + msg + "</p>";
        errorArea.className = "visible";
    }
}
