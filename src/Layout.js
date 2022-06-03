import React from 'react'
import {Home,About,NotFound} from './Example'
import {Link,Route,Routes} from 'react-router-dom'
import Header from './components/Header.js'
import Main from './components/Main.js'


export default function Layout() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home | </Link>
        <Link to="/about">About  |</Link>
        <Link to="https://www.google.com/">Outside  |</Link>
        <span>page : 
        <Routes>
        <Route path='/' element ={<b>🏠</b>}/>
         <Route path='/about' element ={<u>ℹ️</u>}/>
         <Route path='*' element ={"what?"}/>
         </Routes>
        </span>
      </nav> */}
      <Header/>
      <Main/>

    <Routes>
    {/* <Route path='/' element ={<Home/>}/> */}
    <Route path='/cat/:catName' element ={<Main/>}/>
    <Route path='/cat' element ={<Main/>}/>
    <Route path='/' element ={<Main/>}/>
    <Route path='/item/:id' element ={<Main/>}/>
    {/* <Route path='/cat/:catName/:id' element ={<Main/>}/> */}
    {/* <Route path='*' element ={<NotFound/>}/> */}
    
    </Routes>
 
    </div>
  )
}
