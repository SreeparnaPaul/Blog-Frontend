import React, { useState } from 'react'
import ImageUploader from '../components/ImageUploader'
import {Form} from "react-bootstrap"
import { TextField,InputLabel,MenuItem,FormControl,Select, Button } from '@mui/material'
import { Editor } from '@tinymce/tinymce-react';

function WriteBlog() {

    const [writeBlogForm,setWriteBlogForm]=useState({
        title:"",
        featured:"",
        category:"",
        
    })
    const [description,setDescription] =useState("")
  return (
    <div className='container mt-4'>
     <h2 style={{textAlign:"left"}}>Write a blog</h2> 
      <div className='row mt-4'>
      <div className='col md-6'>
      <ImageUploader />
      </div>
      <div className='col md-6'>
      <Form>
        <div className='row'>
        <div className='col-4 mb-4 '>
        <TextField sx={{ m: 1 }} id="outlined-basic" label="Title*" type="text" name ="title" variant="outlined" value={writeBlogForm?.title} onChange={(e)=>setWriteBlogForm({...writeBlogForm,
        title:e.target.value})}/>

        </div>
        <div className='col-4 mb-4'>
        <FormControl fullWidth sx={{ m: 1 }}>
  <InputLabel id="demo-simple-select-label">Featured</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={writeBlogForm?.featured}
    label="Featured"
    onChange={(e)=>setWriteBlogForm({...writeBlogForm,
    featured:e.target.value})}
  >
    <MenuItem value={true}>True</MenuItem>
    <MenuItem value={false}>False</MenuItem>
    
  </Select>
</FormControl>
        </div>
        <div className='col-4 mb-4'>
        <FormControl fullWidth sx={{ m: 1 }}>
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={writeBlogForm?.category}
    label="Category"
    onChange={(e)=>setWriteBlogForm({...writeBlogForm,
        category:e.target.value})}
  >
    <MenuItem value="travel">Travel</MenuItem>
    <MenuItem value="health">Health</MenuItem>
    <MenuItem value="politics">Politics</MenuItem>
    <MenuItem value="science">Science</MenuItem>
    <MenuItem value="food">Food</MenuItem>
  </Select>
</FormControl>
        </div>
        </div>
        <div className='row'>
        <div className='col-12 mb-4 '>
        <Editor
        apiKey='cme7yw30dyr4gxd1oilqmv1janb6idyftix4i5q5z8h0d4gb'
        onInit={(evt, editor) => console.log(editor)}
        init={{
            height: 300,
            menubar: false,
            plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={(response)=>setDescription(response)}
    />
    </div>
    </div>
      </Form>
      </div>
       </div>
      <div style={{display:"flex",justifyContent:"center"}}>
      <Button variant="contained" style={{marginRight:"5px"}}> Submit </Button>
      <Button variant='light' style={{border:"1px solid black"}}> Cancel </Button>
      </div>
    </div>
  )
}

export default WriteBlog
