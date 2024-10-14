// Removing or updating an specific object in a array of data based with unique ID.

let users = [
    {id: 1, name: "John Doe", age: 25, role: "admin"},
    {id: 2, name: "Smith", age: 32, role: "user"},
    {id: 3, name: "Jane", age: 22, role: "admin"},
    {id: 4, name: "Kane", age: 28, role: "user"}
];

let updatedUsers = users.filter((user) => {
    if(user.id !== 2) {
        return user; // agar id 2 nahi hai to wo user ko return kare ga
    }
});

console.log(updatedUsers);