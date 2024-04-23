let car: string='subaru';

//Test 1:equality comparison(true)
console.log("Is car == 'subaru'? I prdict True.");
console.log(car =='subaru'); //True

//Test 2:strict equality comparison(true)
console.log("Is car === 'subaru'? I prdict True.");
console.log(car ==='subaru'); // True

//Test 3:Inequality comparison(false)
console.log("Is car !='subaru'? I prdict false.");
console.log(car ! ='subaru'); //False

//Test 4:strict inequality comparison(False)
console.log("Is car !== 'subaru'? I prdict False.");
console.log(car !=='subaru'); //False

//Test 5:less than comparison (False)
console.log("Is car < 'subaru'? I prdict False.");
console.log(car < 'subaru'); //False(lexicographic comparison)

//Test 6:greater than comparison (False)
console.log("Is car > 'subaru'? I prdict False.");
console.log(car > 'subaru'); //False(lexicographic comparison)

//Test 7:less than ar equal comparison (True)
console.log("Is car <= 'subaru'? I prdict True.");
console.log(car <= 'subaru'); //True

//Test 8:Greater than ar equal comparison (True)
console.log("Is car >= 'subaru'? I prdict True.");
console.log(car >= 'subaru'); // True

//Test 9:checking truthiness(True)
console.log("Is car ? 'subaru'? I prdict True.");
console.log(car); //True(non-empty string is truthy

//Test 10: checking falsiness (False)
console.log("Is !car ? 'subaru'? I prdict True.");
console.log(!car); //False (negation of a truthy value)
