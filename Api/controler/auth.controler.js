import User from "../module/user.module.js";
import bcryptjs from "bcryptjs";

export const sginUp = async (req,res)=>{
    console.log(req.body);
    const {name,email,password}=req.body;
    const hashPassword= await bcryptjs.hashSync(password,12);
    const  newUser=  User({name,email,password:hashPassword});
    try {
       await newUser.save(); 
       res.status(201).json({message:"User created successfully !"});

        
    } catch (error) {
       res.status(500).json({message:"Something went wrong !"});


        
    }
}

    
   
//  export  const sginUp= async (req,res)=>{
//     // res.send("sginUp");
//     console.log(req.body);
//    const {name,email,password}=req.body;
//    const newUser= await  User({name,email,password});
//     newUser.save();
//     res.send("User created successfully !");  

// }


