let magician : string [] = ['Harry Potter' ,'Hermion ganger' ,'Ron weasley' ,'Albus dumbledore'];
function copyArray(arr:string[]){
    return[...arr]
}
function make_great(magicianArray :string[]){
    for(let i=0; i<magicianArray.length; i++){
        magicianArray[i] ='the great ' + magicianArray[i]
    }
}
function show_magicians(magicians:string[]){
    magicians.forEach(element =>{
console.log(element);
    })
}

const copyMagicianArray =copyArray(magician)

make_great(copyMagicianArray)
console.log('This is my original array:')
show_magicians(magician);
console.log('This is my modfied copy of the array:')
show_magicians(copyMagicianArray)