import React from 'react'
import loginImage from "../assets/login.jpg"
import TrendingBlogCard from '../components/Trending/TrendingBlogCard'

function Blogs() {
  return (
    <div style={{ backgroundImage: `url(${loginImage})`, backgroundRepeat: "no-repeat", minHeight: "90vh", backgroundSize: "cover", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <TrendingBlogCard/>
    </div>
  )
}

export default Blogs
