import React from 'react'
import TrendingBlogCard from './TrendingBlogCard';
import Card from "react-bootstrap/Card";
function TrendingBlogForHome() {
  return (
   
    <div style={{marginTop:"20px"}}>
    <Card style={{padding:"30px"}}>
    <Card.Title style={{textAlign:"left",paddingLeft:"30px"}}>
   <h1>Featured Blogs</h1>
    </Card.Title>
    <Card.Body>
     <TrendingBlogCard/>
    </Card.Body>
    </Card>
  </div>
   
  )
}

export default TrendingBlogForHome
