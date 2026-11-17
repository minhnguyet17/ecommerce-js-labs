/* Exercise 8.11 — Arrays of Objects */

// define constructor function for Country objects
function Country(name, iso, capital, population) {
    this.name = name;
    this.iso = iso;
    this.capital = capital;
    this.population = population;
}

// create an array of country objects
var countries = [
    new Country("Bahamas", "BS", "Nassau", 301790),
    new Country("Canada", "CA", "Ottawa", 33679000),
    new Country("Germany", "DE", "Berlin", 81802257),
];

// you can also push each new country object onto the end of the array
countries.push(new Country("Spain", "ES", "Madrid", 46505963));
countries.push(new Country("United Kingdom", "GB", "London", 62348447));

/* your code goes here */

/* Step 1: truy cập thuộc tính bằng dot notation
for (var i = 0; i < countries.length; i++) {
    document.write(countries[i].name);
    document.write("<br>");
}
*/

/* Step 2-4: dùng biến tạm + bracket notation (có thể dùng biến làm tên thuộc tính)
for (var i = 0; i < countries.length; i++) {
    var c = countries[i];
    var temp = "name";
    document.write(c[temp]);
    document.write("<br>");
}
*/

// Step 5: for..in duyệt qua TẤT CẢ thuộc tính của từng object
for (var i = 0; i < countries.length; i++) {
    var c = countries[i];
    document.write("<div class='box'>");
    document.write("<img src='../assets/flags/" + c.iso + ".png' class='boxImg'>");
    for (var propertyName in c) {
        document.write("<strong>");
        document.write(propertyName + ": ");
        document.write("</strong>");
        document.write(c[propertyName]);
        document.write("<br>");
    }
    document.write("</div>");
}
