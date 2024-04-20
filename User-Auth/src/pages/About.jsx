import React from 'react'

const About = () => {
  return (
    // About page with image in tailwind css
    <>
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="p-10 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-10">About Us</h1>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit
          . Quisquam, voluptate! Quisquam, voluptate!</p>
        <img src="https://source.unsplash.com/random/400x200" alt="about" className="mt-5" />
      </div>
    </div>
    </>

  )
}

export default About