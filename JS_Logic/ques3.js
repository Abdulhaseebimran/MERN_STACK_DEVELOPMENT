// Mapping over an array of user data to create a list of user cards

let users = [
    {name: "John Doe", age: 25},
    {name: "Smith", age: 32},
    {name: "Jane", age: 22},
    {name: "Kane", age: 28}
];

let userCards = users.map((user) => {
    return (
       ` <div>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
        </div>`
    );
});

console.log(userCards);