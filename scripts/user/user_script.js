
// Adding admin account
const user = [
    {
        "email": "code@gmail.com",
            "username": "codeX",
            "firstname": "code",
            "lastname": "X",
            "password": "P@$$123w0rD#01",
            "role" : "MANAGER",
            "access" : "ACTIVE"
    }
];



 function addUser(user) {
    db.users.insertOne(user);
    console.log(`User has been Added username => ${user.username} , password => ${user.password}`);
}

addUser();
