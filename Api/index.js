import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.use((err,req, res, next) => {
   const statusCode = res.statusCode || 500;
   const message = err.message || 'Internal Server Error';
   return res.status(statusCode).json({
       success:false,
       message,
       statusCode
   });
}
);


// Assuming the URI is stored in a variable called `dbURI`
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/user-auth';

// Connect to MongoDB
mongoose.connect(dbURI);

// Handle connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Routes
import userrouter from './route/user.route.js';
import authrouter from './route/auth.route.js';
app.use("/api/user", userrouter);
app.use("/api/auth", authrouter);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} !`);
});
