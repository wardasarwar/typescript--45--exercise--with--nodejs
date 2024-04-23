function myalbum(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = myalbum("Ali", "Rang-e-Mohabat");
var album2 = myalbum("Madad", "Roshan Andehra");
var album3 = myalbum("Riyaz", "Mausam-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
function myalbum2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album4 = myalbum2("Ali", "Dil hai", 30);
var album5 = myalbum2("Madad", "Ajeeb Kahani", 55);
var album6 = myalbum2("Riyaz", "Mausam-e-Dil");
console.log(album4);
console.log(album5);
console.log(album6);
