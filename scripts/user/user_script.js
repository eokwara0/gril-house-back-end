
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
    db.users.insertOne(user[0]);
    console.log(`User has been Added username => ${user[0].username} , password => ${user[0].password}`);
}

addUser(user);
