import React from 'react'
import loginImage from "../assets/login.jpg"
import AllBlogsCard from '../components/AllBlogsCard'

function Blogs() {
  return (
    <div style={{ backgroundImage: `url(${loginImage})`, backgroundRepeat: "no-repeat", minHeight: "90vh", backgroundSize: "cover", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <AllBlogsCard/>
    </div>
  )
}

export default Blogs
