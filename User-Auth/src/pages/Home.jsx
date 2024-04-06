import React from 'react'

const Home = () => {
   
  return (
  <>
<div class="flex flex-col md:flex-row justify-center items-center md:px-10 md:py-20">
    <div class="text-center md:text-left md:w-1/2 md:order-2">
        <h1 class="text-4xl font-bold">Welcome to our website</h1>
        <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae.</p>
        <button class="bg-indigo-800 text-white p-2 rounded mt-5">Get Started</button>
    </div>
    <div class="mt-10 md:mt-0 md:ml-10 md:w-1/2 md:order-1">
        <img src="https://www.kindpng.com/picc/m/22-223941_transparent-people-png-people-png.png" alt="people" class="w-2/4"/>
    </div>
</div> 
   </>
  )
}

export default Home