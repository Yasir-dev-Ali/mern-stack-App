import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <>

 <nav class="bg-indigo-800 text-white ">
    <div class="flex justify-around items-center p-5">
        <Link href="#" class="text-2xl font-bold">User </Link>
        <input type="checkbox" id="menu" className="hidden" checked={isMenuOpen} onChange={toggleMenu}/>
        <label htmlFor="menu" className="text-3xl cursor-pointer md:hidden">&#9776;</label>
        <div className={isMenuOpen ? "flex flex-col md:flex-row md:flex space-x-5" : "hidden md:flex space-x-5"}>
          <Link to="*" className="p-2 hover:bg-indigo-600">Home</Link>
          <Link to="/About" className="p-2 hover:bg-indigo-600">About</Link>

            <Link to="/signin" className="p-2 hover:bg-indigo-600">Sign In</Link>
            <Link to="/signup" className="p-2 hover:bg-indigo-600">Sign Up</Link>

        </div>
    </div>  
</nav>
    </>
  )
}

export default Header