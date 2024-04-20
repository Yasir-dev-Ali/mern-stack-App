import React from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'; 
import Home from './pages/Home';
import About from './pages/About';
import Header from './Components/Header';


const App = () => {
  return (
    
  
   <BrowserRouter>
    <Header />
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;

