import User from "../module/user.module.js";


export const  sginUp= async (req,res)=>{
    // res.send("sginUp");
    console.log(req.body);
   const {name,email,password}=req.body;

    const  newUser= new User({
        name,
        email,
        password    
    });
     await newUser.save();
    res.status(201).json({ message: "User Registered Successfully !"}); 





}


