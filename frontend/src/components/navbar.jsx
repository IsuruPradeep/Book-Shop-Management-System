import React from 'react'
import { Link } from "react-router-dom";
import { FaBarsProgress } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";


const navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side*/}

        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <FaBarsProgress className="size-7"/>
          </Link>
          {/* serch input*/ }
          <div>
            <BsSearch />
            <input type="text" placeholder="Search Here"  
            className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md 
            forcus:outline-none" 
            />
          </div>
        </div>

        {/* right side*/}

        <div>
          nav item
        </div>
      </nav>
    </header>
  )
}

export default navbar