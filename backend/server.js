const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection string
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

// Connect to the MongoDB database
client.connect(err => {
  if (err) {
    console.error('Failed to connect to the database');
    process.exit(1);
  }
  
  console.log('Connected to the database');
  
  // Define a route for handling login form submissions
  app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Save the login information to the database
    const db = client.db('your-database-name');
    const collection = db.collection('users');
    
    collection.insertOne({ username, password }, (err, result) => {
      if (err) {
        console.error('Failed to insert user login information');
        res.sendStatus(500);
      } else {
        console.log('User login information saved to the database');
        res.sendStatus(200);
      }
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
