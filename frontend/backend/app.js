console.log('Register endpoint hit');
console.log('Login endpoint hit');
console.log('Root endpoint hit');
console.log(`Server started on port ${PORT}`);const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON requests
app.use(express.json());

app.post('/api/auth/register', (req, res) => {
    const { name, email, password } = req.body;
    // Here you would typically handle the registration logic (e.g., saving to a database)
    res.status(201).json({ success: true, message: 'User registered successfully!' });
});

app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    // Here you would typically handle the login logic (e.g., checking credentials)
    res.status(200).json({ success: true, message: 'User logged in successfully!' });
});

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Backend is running!');


});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
