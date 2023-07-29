import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import { Loader } from '../utils/Loader';

function AllBlogsCard() {
    const [blogList,setBlogList] =useState()
    const [isLoading,setIsLoading] =useState(false)
    useEffect(()=>{
        setIsLoading(true)
        getAllBlogs()
        setIsLoading(false)
    },[])
    const getAllBlogs=()=>{
        var myHeaders = new Headers();
        
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "offset": 0,
            "orderType": "asc",
            "pageSize": 10,
            "searchField": [],
            "searchFieldValue": [],
            "sortBy": "id"
          });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          fetch("http://localhost:8081/blog/all-blogs", requestOptions)
            .then(response => {
                response.text()    
            })
            .then((result) => {console.log(result)
                setBlogList(result?.data?.blogList)})
            .catch(error => console.log('error', error));
    }
    console.log(blogList,"asd");
    const history =useHistory()
    return (
   
        <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
        <Loader loader={isLoading}/>
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

export default AllBlogsCard
