import React, { useState } from 'react'
import ImageUploader from '../components/ImageUploader'
import {Form} from "react-bootstrap"
import { TextField,InputLabel,MenuItem,FormControl,Select, Button } from '@mui/material'
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch} from "react-redux"
import { createBlog } from '../store/blog';
import { sweetAlert } from "../utils/sweetAlert";
import { Loader } from '../utils/Loader';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function WriteBlog() {

    const [writeBlogForm,setWriteBlogForm]=useState({
        title:"",
        featured:"",
        category:0,
        
    })
    const [description,setDescription] =useState("")
    const [base64Data, setBase64Data] = useState('');
    const history= useHistory()
  const handleBase64Data = (data) => {
    setBase64Data(data); // Update base64Data in the parent component
  };
  const [imageUploading, setImageUploading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    try {
      setImageUploading(true);
      const postBlog={
        blogImageBase64Code: base64Data,
        categoryId: writeBlogForm.category,
        description:description,
        featured: writeBlogForm.featured,
        title: writeBlogForm.title,
      }
      console.log(postBlog,"line36");
      // Dispatch the action to post the blog
      dispatch(createBlog(postBlog));

      // Reset form fields or navigate to another page
      // ...

    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while submitting the form.');
      sweetAlert("Oops!",error,"error")
    } finally {
      setImageUploading(false);
      sweetAlert("Success","Blog created successfully","success")
      history.goBack("/")
    }
  };
  return (
    <div className='container mt-4' >
     <h2 style={{textAlign:"left"}}>Write a blog</h2> 
      <div className='row mt-4'>
      <div className='col md-6'>
      <ImageUploader onBase64Data={handleBase64Data} />
      </div>
      <div className='col md-6'>
      <Loader loader={imageUploading}/>
      <Form>
        <div className='row'>
        <div className='col-4 mb-4 '>
        <TextField sx={{ m: 1 }} id="outlined-basic" label="Title*" type="text" name ="title" variant="outlined" value={writeBlogForm?.title} onChange={(e)=>setWriteBlogForm({...writeBlogForm,
        title:e.target.value})}/>

        </div>
        <div className='col-4 mb-4'>
        <FormControl fullWidth sx={{ m: 1 }}>
  <InputLabel id="demo-simple-select-label">Featured*</InputLabel>
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
  <InputLabel id="demo-simple-select-label">Category*</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={writeBlogForm?.category}
    label="Category"
    onChange={(e)=>setWriteBlogForm({...writeBlogForm,
        category:e.target.value})}
  >
    <MenuItem value={1}>Travel</MenuItem>
    <MenuItem value={2}>Health</MenuItem>
    <MenuItem value={3}>Politics</MenuItem>
    <MenuItem value={4}>Science</MenuItem>
    <MenuItem value={5}>Food</MenuItem>
  </Select>
</FormControl>
        </div>
        </div>
        <div className='row'>
        <div className='col-12 mb-4 '>
     
        <Editor
        apiKey='cme7yw30dyr4gxd1oilqmv1janb6idyftix4i5q5z8h0d4gb'
        onInit={(evt, editor) => console.log(editor)}
        // placeholder="Write your content here"
        init={{
            height: 300,
            menubar: false,
            placeholder:"Write your content here",
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
      <Button variant="contained" style={{marginRight:"5px"}} onClick={()=>handleSubmit()}> Submit </Button>
      <Button variant='light' style={{border:"1px solid black"}}> Cancel </Button>
      </div>
    </div>
  )
}

export default WriteBlog
