function describe_city(nameOfcity, country) {
    if (country === void 0) { country = "pakistan"; }
    return "".concat(nameOfcity, " is in ").concat(country);
}
;
// cities
var city1 = describe_city("captown , south africa");
var city2 = describe_city("India ,delhi");
var city3 = describe_city(" Pakistan ,hyderabad");
var city4 = describe_city("dubai", "UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
