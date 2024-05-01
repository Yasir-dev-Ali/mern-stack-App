import User from "../module/user.module.js";
import bcryptjs from "bcryptjs";
import { errorHandle } from "../utilte/error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";  
dotenv.config();

export const sginUp = async (req,res,next)=>{
    console.log(req.body);
    const {name,email,password}=req.body;
    const hashPassword=  bcryptjs.hashSync(password,12);
    const  newUser=  User({name,email,password:hashPassword});
    try {
       await newUser.save(); 
       res.status(201).json({message:"User created successfully !"});

        
    } catch (error) {
      //  res.status(500).json({message:"Something went wrong !"});
      next(errorHandle(500,"Something went wrong !"));



        
    }
}



export const sginIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const valiUser = await User.findOne({ email });
    if (!valiUser) {
      return next(errorHandle(404, "User Not Found!"));
    }
    const isMatch = bcryptjs.compareSync(password, valiUser.password);
    if (!isMatch) {
      return next(errorHandle(401, "Invalid Password!")); 


    }
    
    // Use a fallback mechanism for the secret key
    const secretKey = process.env.JWT_SECRET || 'fallback_secret_key';
    const token = jwt.sign({ id: valiUser._id }, secretKey);
    const { password: pass, ...user } = valiUser._doc;
    
    res.cookie("token", token, { httpOnly: true }).status(200).json({ message: "User Logged In Successfully!" });
  } catch (error) {
    next(error);
  }
};

