import React, { useState } from 'react';  
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formdata, setFormdata] = useState({});
    const [loading, setloading] = useState(false);

   

 

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });

    };
   const handleSubmit= async (e)=>{
    e.preventDefault();
    try {
        setloading(true);
         
        const response = await fetch('/api/auth/signup',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formdata)
              
        } );
        const data= await response.json();
        setloading(false);
        if(data.error){
            alert(data.error);
        }
         
    

    } catch (error) {
        setloading(false);
        
    }


   }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3">
                <h1 className="text-center text-indigo-800 text-4xl">Sign Up</h1>
                <form className="mt-10" onSubmit={handleSubmit}>

                    <div className="mb-6">
                        <label htmlFor="name" className="block text-indigo-800 text-sm font-medium mb-2">Name </label>
                        <input type="text" name="name" id="name" placeholder="Your Name" onChange={handleChange} className="w-full p-3 rounded border border-gray-300" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-indigo-800 text-sm font-medium mb-2">Email</label>
                        <input type="email" name="email" id="email" placeholder="Your Email" onChange={handleChange} className="w-full p-3 rounded border border-gray-300" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-indigo-800 text-sm font-medium mb-2">Password</label>
                        <input type="password" name="password" id="password" placeholder="Your Password" onChange={handleChange} className="w-full p-3 rounded border border-gray-300" />
                    </div>

                    <button className="w-full bg-indigo-800 hover:bg-indigo-600 text-white font-semibold p-3">
                      {loading ? 'Loading...': 'Sign Up'}

                    </button>
                    <div className="text-center my-4">Or</div>
                    < button className = "w-full bg-red-800 hover:bg-red-600 text-white font-semibold p-3" >
                        Sign Up with Google
                    </button>
                    <div className="text-center mt-4">
                        <Link to="/signin" className="text-indigo-800">Already have an account? Sign In</Link>
                    </div>
                    
                   
                </form>
            </div>
        </div>
    );
}   


export default SignUp;