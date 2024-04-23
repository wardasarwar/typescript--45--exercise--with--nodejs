let current_users : string [] =['saba','admin','ahmed','babr','raza'];
let new_user : string [] = ['hassan','taha','fawad','admin','sana'];
new_user.forEach((newUser) =>{
    if(
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
    )
    console.log(`${newUser} we need to enter a new username.`);
    else{
        console.log(`${newUser} is available.`);
    }
});