import React from 'react'
import {Link} from 'react-router-dom'
function MainLayout({cartdata}){
  return (
    <div>

      <nav style={{display:'flex',justifyContent:'space-around',alignItems:'center',height:'10vh',backgroundColor:'green',color:'black'}}>
        <Link to='/login'>login</Link>
        <Link to='/registration'>registration</Link>
      </nav>
    </div>
  )
}


export default MainLayout