/* Exercise 8.9 — Functions as Objects */

var isCanadian = true;

/* Step 1: 3 hàm độc lập
function taxRate() {
  // remember : variables defined outside of a function have global scope
  if (isCanadian) {
      return 0.05;
  } else {
      return 0.0;
  }
}
function calculateTax(amount) {
  return amount * taxRate();
}
*/

/* Step 3: lồng hàm taxRate() vào trong calculateTax()
function calculateTax(amount) {
    return amount * taxRate();

    function taxRate() {
        if (isCanadian) { return 0.05; } else { return 0.0; }
    }
}
*/

/* Step 4-5: định nghĩa hàm như một object (named -> anonymous)
function calculateTax(amount) {
    // define an anonymous function as an object
    var tax = function () {
        if (isCanadian) { return 0.05; } else { return 0.0; }
    };
    // now invoke the function using the object
    return amount * tax();
}
*/

// Step 6: truyền một hàm (anonymous function) làm tham số
function calculateTax(amount, tax) {
    return amount * tax();
}

function calculateTotal(price, quantity) {
    var amount = price * quantity;
    return amount + calculateTax(amount, function () {
        if (isCanadian) {
            return 0.05;
        } else {
            return 0.0;
        }
    });
}
