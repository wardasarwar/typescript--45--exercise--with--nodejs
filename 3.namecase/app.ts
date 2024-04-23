// lower case
let personName: strig=:"Warda"
console .log("lower case;", personName.toLowerCase());

// upper case
console .log("upper case;", personName.toUpperCase());

// title case
console .log("title case;", personName.replace(/\bw/g,c => c.toUpperCase()));
