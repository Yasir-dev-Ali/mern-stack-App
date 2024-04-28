import express from 'express';
import mongoose from 'mongoose';
const app = express();
import userrouter from './route/user.route.js';
import authrouter from './route/auth.route.js';
import dotenv from 'dotenv';
dotenv.config();   
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to mongodb
const connectDb=async()=>{
    try{
        await 'mongoose.connect(process.env.MONGO_URL)';
        console.log('Connected to MongoDB !');
    }catch(err){
        console.log(err);
    }
}
connectDb();
// routes
app.use("/api/user", userrouter);
app.use("/api/auth", authrouter);







app.listen(3000, () => {
    console.log('Server is running on port 3000 ! ');
});
