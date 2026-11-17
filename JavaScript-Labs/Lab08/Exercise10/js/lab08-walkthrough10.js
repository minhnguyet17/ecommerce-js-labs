/* Exercise 8.10 — Creating JavaScript Objects */

/* Step 1: tạo object bằng new Object() và dot notation
var order = new Object();
order.product = "Self Portrait in a Straw Hat";
order.price = 15.0;
order.quantity = 2;
order.total = function() { return this.price * this.quantity; };

document.write("Product=" + order.product);
document.write("<br>Price=" + order.price);
document.write("<br>Quantity=" + order.quantity);
document.write("<br>Total=" + order.total());
// Step 3: bỏ () -> in ra NỘI DUNG của hàm thay vì gọi hàm
// document.write("<br>Total=" + order.total);
*/

/* Step 4-5: object rỗng {} + bracket notation
var order = {};
order["product"] = "Self Portrait in a Straw Hat";
order["price"] = 15.0;
order["quantity"] = 2;
order["total"] = function() { return this.price * this.quantity; };
*/

/* Step 6: object literal notation
var order = {
    product: "Self Portrait in a Straw Hat",
    price: 15.0,
    quantity: 2,
    total: function() { return this.price * this.quantity; }
};
*/

// Step 7 + 10: constructor function -> tạo nhiều instance cùng kiểu
function order(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.total = function() { return this.price * this.quantity; },

    this.output = function() {
        document.write("<p>Product=" + this.product);
        document.write("<br>Price=" + this.price);
        document.write("<br>Quantity=" + this.quantity);
        document.write("<br>Total=" + this.total());
    }
}

/* Step 8-9: in từng thuộc tính
document.write("<p>Product=" + example1.product);
document.write("<br>Price=" + example1.price);
document.write("<br>Quantity=" + example1.quantity);
document.write("<br>Total=" + example1.total());
...
*/

// Step 11: dùng phương thức output() của object
var example1 = new order("Self Portrait in a Straw Hat", 15, 2);
var example2 = new order("Untitled #23", 10, 4);

example1.output();
example2.output();
