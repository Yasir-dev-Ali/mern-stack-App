import express from 'express';
import mongoose from 'mongoose';
const app = express();
import userrouter from './route/user.route.js';
import dotenv from 'dotenv';
dotenv.config();   

const connectDb=async()=>{
    try{
        await 'mongoose.connect(process.env.MONGO_URL)';
        console.log('Connected to MongoDB !');
    }catch(err){
        console.log(err);
    }
}
connectDb();
app.use("/api/user", userrouter);







app.listen(3000, () => {
    console.log('Server is running on port 3000 ! ');
});
