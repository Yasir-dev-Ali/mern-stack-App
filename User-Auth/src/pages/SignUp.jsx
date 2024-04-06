import React from 'react';  

const SignUp = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3">
                <h1 className="text-center text-indigo-800 text-4xl">Sign Up</h1>
                <form className="mt-10">
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-indigo-800 text-sm font-medium mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            className="w-full p-2 border border-indigo-800"
                        />
                    </div>


                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-indigo-800 text-sm font-medium mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full p-2 border border-indigo-800"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-indigo-800 text-sm font-medium mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your Password"
                            className="w-full p-2 border border-indigo-800"
                        />
                    </div>
                    <button className="w-full bg-indigo-800 hover:bg-indigo-600 text-white font-semibold p-3">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}   


export default SignUp;