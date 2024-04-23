var current_users = ['saba', 'admin', 'ahmed', 'babr', 'raza'];
var new_user = ['hassan', 'taha', 'fawad', 'admin', 'sana'];
new_user.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); }))
        console.log("".concat(newUser, " we need to enter a new username."));
    else {
        console.log("".concat(newUser, " is available."));
    }
});
