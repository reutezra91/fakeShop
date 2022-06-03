import React from 'react'

function Home() {
  return (
    <div><h1>Welcome to Home</h1></div>
  )
}

 function About() {
    return (
      <div><p>About-bla bla </p></div>
    )
  }

  
  function NotFound() {
    return (
      <img src='https://media.istockphoto.com/photos/error-404-3drendering-page-concept-picture-id1302333331?b=1&k=20&m=1302333331&s=170667a&w=0&h=t-4iFoxu6BLO002CSbv_F_S2b02xAiI5O1sYPjE92T8='/>
    )
  }
  
  export {Home,About,NotFound}
