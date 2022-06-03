import React from 'react'
import { useState,useEffect } from 'react'
import {useParams} from 'react-router'

export default function Items() {
    const {id}=useParams()
    const [item,setItem]=useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+id)
            .then((res) => res.json())
            .then((data) => {
                setItem(data)
                console.log(data)
                
                
            })

    }, [])
    return (
        <div className='itemDetail'>
            <div > <h1><b>{item.title}</b></h1>
            <br/>
            <p>{item.description}</p>
            <br/>
            <h4>{item.price}{" NIS"}</h4>
             <img src={item.image}  className='itemImage1'/>
                    
                     </div>
  
  
      </div>
  
    )
  }