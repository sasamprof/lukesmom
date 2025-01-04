console.log('starting the server');
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

console.log('after imports');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Adjust if you have a different user
  password: '', // Provide password if needed
  database: 'lukesmom',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
