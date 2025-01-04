"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('starting the server');
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mysql2_1 = __importDefault(require("mysql2"));
console.log('after imports');
// Create an Express application
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Enable CORS
app.use((0, cors_1.default)());
// Create a MySQL connection
const db = mysql2_1.default.createConnection({
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
