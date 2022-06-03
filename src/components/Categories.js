import React from 'react'
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom' 

export default function Categories() {
    const [categories,setCategories]=useState([])

    

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data)
                
            })


    }, [])

    if(!categories.length) return 'loading...'

  return (
 <div className="listCat">
{categories.map((c)=>{
   return( <Link to={'/items/'+c}><div className="cat">{c}</div></Link>)
})}
   
 </div>
 
  )
}
