import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import blogList from "../../dummyData/AllBlogsResponse"
 function TrendingBlogCard() {
  const history= useHistory()
  
    
  return (
   
    <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>

    {blogList && blogList?.map((value)=>{
      if(value?.featured){
        return(
          <Card sx={{ minWidth: 320,marginRight:4,marginBottom:4 }} key={value?.id}>
          <CardMedia
            sx={{ height: 280 }}
            image={value?.image}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {value?.title} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {value?.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={(e)=>{
              e.preventDefault()
              history.push("/blogs")
            
            }}>Learn More</Button>
          </CardActions>
        </Card>
      )
      }
    })} 
    
    </div>
    

  );
}
export default TrendingBlogCard;