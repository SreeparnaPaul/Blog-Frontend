import React from 'react'
import Card from "react-bootstrap/Card";
import CategoryType from './CategoryType';

function CategoryCardForHome() {

  return (
    <div style={{marginTop:"20px"}}>
      <Card style={{padding:"30px"}}>
      <Card.Title style={{textAlign:"left",paddingLeft:"30px"}}>
     <h1> Categories</h1>
      </Card.Title>
      <Card.Body>
        <CategoryType/>
      </Card.Body>
      </Card>
    </div>
  )
}

export default CategoryCardForHome
