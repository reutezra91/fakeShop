import React from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom' 
import {Route,Routes} from 'react-router-dom'
import Categories from './Categories'
import Items from './Items'
import Item from './Item'

// const links=[
//     {n:'garden', link: 'garden'},  {n:'Home Styling', link: 'home'},  {n:'Jewlery', link: 'Jewlery'}
// ]

function Main(){
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Categories className='listCat'/>}/>
            <Route path='/items/:cat' element={<Items className='listItem'/>}/>
            <Route path='/item/:id' element={<Item className='itemDetail'/>}/>

        </Routes>
        {/* <h1>{params.catName}</h1>
    <h3>{params.id}</h3> */}
     {/* <nav>
    {links.map((element) => {
            return  <Link to={`/cat/${element.n}`}>{element.link +'    '} </Link>
        })
    }
    
    </nav> */}
    </div>
  )
}

export default Main