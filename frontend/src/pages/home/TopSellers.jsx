import React, { useEffect, useState } from 'react'
const categories=["Choose a genre","Business", "fiction","Horror","Adventure"]
const TopSeller = () => {

    const [books, setBooks]=useState([]);
    useEffect(()=> {
            fetch("books.json")
            .then(res=> res.json())
            .then((data)=>setBooks(data))
    },[])

  
    return (
      <>
         <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Top Seller</h2>
            {/*category filters go here*/}
            <div>
              <select name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 roundes-md px-2 py-1 focus:outline-none'>
                {
                  categories.map((category, index) =>(
                    <option key={index} value={category}>{category}</option>
                  ))
                }
              </select>

                
            </div>
         </div>
      </>
    )
  }
  
  export default TopSeller