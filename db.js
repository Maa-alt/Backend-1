const mysql = require('mysql2');

// Set up the database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'veroneca', // Replace with your actual MySQL password
    database: 'Wings'     // Ensure this database exists
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1); // Exit the process if connection fails
    }
    console.log('Connected to MySQL database');
});

module.exports = db;
