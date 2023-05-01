import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import tree from "../../assets/tree.jpg"

 function TrendingBlogCard() {
    const trendingBlogs = [
        { title: "Save Green Save Life",
         image: tree,
          id: "1",
        description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" },
        { title: "Save Green Save Life",
        image: tree,
         id: "2",
       description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" },
       { title: "Save Green Save Life",
       image: tree,
        id: "3",
      description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" },
      { title: "Save Green Save Life",
         image: tree,
          id: "1",
        description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" },
      ];
    
  return (
   
    <div style={{marginTop:"20px"}}>
    
    <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
    {trendingBlogs && trendingBlogs?.map((value)=>{
        return(
            <Card sx={{ maxWidth: 320 }} key={value?.id}>
            <CardMedia
              sx={{ height: 280 }}
              image={tree}
              title="green iguana"
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
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        )
    })}
    
    </div>
    </div>

  );
}
export default TrendingBlogCard;