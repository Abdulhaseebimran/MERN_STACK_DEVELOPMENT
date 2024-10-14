// Grouping an array of object by a specific property (e.g., grouping user by role)

let users = [
    {name: "John Doe", age: 25, role: "admin"},
    {name: "Smith", age: 32, role: "user"},
    {name: "Jane", age: 22, role: "admin"},
    {name: "Kane", age: 28, role: "user"}
]

let obj = {};

users.forEach((user) => {
    if(obj[user.role]) {
        obj[user.role].push(user);
    }else{
        obj[user.role] = [user];
    }
});

console.log(obj);