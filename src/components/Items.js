import React from 'react'
import { useState,useEffect } from 'react'
import {useParams} from 'react-router'
import {Link} from 'react-router-dom' 

export default function Items() {
    const {cat}=useParams()
    const [items,setItems]=useState([])

    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/"+cat)
            .then((res) => res.json())
            .then((data) => {
                setItems(data)
                
            })

    }, [])

  return (
      <div className="listItem">
      {items.length? 
      items.map(i=>{
          return  <Link to={'/item/'+i.id}><div className="item"> <p>{i.title}</p>
           <img src={i.image}  className='itemImage'/>
                   <h4>{i.price}{" NIS"}</h4>
                   </div></Link>}): <h4>not found</h4>}


    </div>

  )
}
