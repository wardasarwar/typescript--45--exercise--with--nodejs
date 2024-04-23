function myalbum (artistName :string , albumTitle : string){
    return{artistName , albumTitle}
}

let album1 =myalbum("Ali" , "Rang-e-Mohabat");
let album2 =myalbum("Madad" , "Roshan Andehra");
let album3 =myalbum("Riyaz" , "Mausam-e-Dil");

console.log(album1);
console.log(album2);
console.log(album3);

function myalbum2 (artistName :string , albumTitle : string, numberOfTracks?: number){
    return{artistName , albumTitle}
}

let album4 =myalbum2("Ali" , "Dil hai" ,30);
let album5 =myalbum2("Madad" , "Ajeeb Kahani" ,55);
let album6 =myalbum2("Riyaz" , "Mausam-e-Dil");

console.log(album4);
console.log(album5);
console.log(album6);