const express = require('express');
const morgan = require('morgan');
const app = express();
const userModel = require('./models/users.models');
const dbConnected = require('./config/db');


app.set('view engine', 'ejs');

app.use(morgan('dev'));

// middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    console.log('A new request received at ' + Date.now());
    next();
});

app.get('/', (req, res) => {
    // res.send('Welcome to our home page');
    res.render('index');
});

app.get('/about', (req, res) => {
    res.send('Welcome to our About page');
});

app.get('/profile', (req, res) => {
    res.send('Welcome to our Profile page');
});

app.get('/get-form-data', (req, res) => {
    console.log("form successfully saved: " + req.query);
    res.send(req.query);
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    
    const {username, email, password} = req.body;

    const newUser = await userModel.create({
        username: username,
        email: email,
        password: password,
    });
    res.send(newUser);
});

app.get('/get-users', async (req, res) => {
    // const users = await userModel.find();
    const users = await userModel.findOne({
        username: "abdul haseeb",
    })
    res.send(users);
});

app.get('/update-users', async (req, res) => {
    const user = await userModel.findOneAndUpdate({
        username: "abdul haseeb",
    }, {
        password: "123456789",
    });
    res.send(user);
});

app.get('/delete-users', async (req, res) => {
    const user = await userModel.findOneAndDelete({
        username: "user",
    });
    res.send(user);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000: http://localhost:3000');
});