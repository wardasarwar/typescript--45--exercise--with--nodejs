function describe_city(nameOfcity: string , country: string ="pakistan"){
    return`${nameOfcity} is in ${country}`;
};
// cities
let city1 = describe_city("captown , south africa");
let city2 = describe_city("India ,delhi");
let city3 = describe_city(" Pakistan ,hyderabad");
let city4 = describe_city("dubai" ,"UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
