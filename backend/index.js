const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'securePassword123'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'anotherSecurePassword456'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: 'yetAnotherSecurePassword789'
    },
    {
        id: 4,
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        password: 'finalSecurePassword101112'
    }
];

app.use("/", (req, res) => {
    res.send("Server running...");
})

app.post('/api/signup', (req, res) => {
    const { name, email, password } = req.body;
    users.push({ name, email, password });
    res.status(201).send('User registered successfully.');
});

app.get('/api/users', (req, res) => {
    res.status(200).json(users); // Send the in-memory users array
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;