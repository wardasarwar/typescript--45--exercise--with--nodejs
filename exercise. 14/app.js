"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
//exercise 14
var guest_list = ['ali', 'azhar', 'raza'];
exports.guest_list = guest_list;
// for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam' +guest_list[i]+'/nwe invited you on dinner tomorrow.\nThank you\n')
// }
var not_present = 'raza';
var new_guest = 'Babar Azam';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + '/nwe invited you on dinner tomorrow.\nThank you\n');
}
console.log("Mr. ".concat(not_present, "will not coming  tomorrow dinner."));
guest_list.unshift('shaheen', 'sarfraz', 'rizwan');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + '/n we invited you on dinner tomorrow.\nThank you\n');
}
