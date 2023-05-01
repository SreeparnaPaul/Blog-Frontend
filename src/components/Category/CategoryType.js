import React from 'react'
import travel from "../../assets/travel.jpg";
import food from "../../assets/food.jpg";
import science2 from "../../assets/science2.jpg";
import politics from "../../assets/politics.jpg";
import health from "../../assets/health.jpg";
function CategoryType() {
    const categories = [
        {title:"Travel",
    image:travel,
    id:"1"
},
         {title:"Health",
        image:health,id:"2"},
          {title:"Politics",image:politics,id:"3"},
           {title:"Science",image:science2,id:"4"},
           {title:"Food",image:food,id:"5"}
         
        ]
   
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
   {categories && categories.map((value)=>{
    return(
       
        <div key={value?.id}>
        <img src={value?.image} width="200px" height="200px" style={{borderRadius:"100px"}}/>
        <h6 style={{paddingTop:"10px"}}>{value?.title}</h6>
        </div>
    
    )
   
   })
}
    
    </div>
  )
}

export default CategoryType
