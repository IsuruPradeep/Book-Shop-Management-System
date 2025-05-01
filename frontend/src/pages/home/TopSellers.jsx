import React, { useEffect, useState } from 'react'

const TopSeller = () => {

    const [books, setBooks]=useState([]);
    useEffect(()=> {
            fetch("books.json")
            .then(res=> res.json()).then((data)=>console.log(data))
    },[])
    return (
      <>
         <div>TopSeller</div>
      </>
    )
  }
  
  export default TopSeller