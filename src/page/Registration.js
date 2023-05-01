import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { Button,OutlinedInput,InputAdornment,IconButton,InputLabel,FormControl,Fab } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from 'react-router-dom';
import { Link} from 'react-router-dom';
import login from "../assets/login.jpg"

function Registration() {
    const [signInFormData,setSignInFormData]=useState({
        email:"",
        password:"",
        username:""
    })
    const [showPassword, setShowPassword] = useState(false);
    const history =useHistory()
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [errors, setErrors] = useState({});
    const [loader,setLoader]=useState(false)
    const handleChange = (event) => {
        setSignInFormData({
          ...signInFormData,
          [event.target.name]: event.target.value,
        });
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setLoader(true)
        //   try {
        //     const response = await fetch(`${process.env.REACT_APP_API_PASSWORD}/createPassword`, {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json',
        //       },
        //       body: JSON.stringify(signInFormData),
        //     });
        //     if (!response.ok) {
        //       throw new Error('Network response was not ok');
        //     }
        //     setLoader(false);
        //                     swal({
        //                         title: "Success",
        //                         text: "Password added successfully",
        //                         icon: "success",
        //                     })
                    history.push("/signIn")

        //     console.log('Form submitted:', signInFormData);
            
        //   } catch (error) {
        //     setLoader(false);
        //     swal(

        //         {
        //             title: "Something went wrong",
        //             text: error,
        //             icon: "danger",
        //             button: "Close",
        //         })
        //     console.error('There was an error submitting the form:', error);
            
        //   }
        } else {
            setLoader(false)
          setErrors(formErrors);
        }
      };
      const validateForm = () => {
        const formErrors = {};
        if (!signInFormData.email.trim()) {
            formErrors.email = 'Email is required';
          } else if (
            !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(signInFormData.email)
          ) {
            formErrors.email = 'Invalid email address';
          }
        if (!signInFormData.password.trim()) {
            formErrors.password = 'Password is required';
          } 
          if (!signInFormData.username.trim()) {
            formErrors.username = 'Username is required';
          } 
        return formErrors;
      };
  return (
    <div style={{ 
        backgroundImage: `url(${login})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}>
    <div className="d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5 text-center" style={{marginTop:"10%"}}>
            <div className='card' style={{display:"flex",justifyContent:"center",marginTop:"5%"}}>
              <div className='card-body'>
                <Fab color="primary" aria-label="add">
                  <LockIcon />
                </Fab>
                <h4 style={{fontFamily:"sans-serif",marginTop:"10px"}}>Sign Up</h4>
                <div className='mb-4'>
                  <TextField sx={{ m: 1, width: '90%' }} id="outlined-basic" label="User Name*" type="text" name ="username" variant="outlined" value={signInFormData?.username} onChange={handleChange}/>
                  {errors?.username && <div style={{color:"red"}}>{errors?.username}</div>}
                </div>
                <div className='mb-4'>
                  <TextField sx={{ m: 1, width: '90%' }} id="outlined-basic" label="Email Address*" type="email" name ="email" variant="outlined" value={signInFormData?.email} onChange={handleChange}/>
                  {errors?.email && <div style={{color:"red"}}>{errors?.email}</div>}
                </div>
                <div  className='mb-4'>
                  <FormControl sx={{ m: 1, width: '90%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={signInFormData?.password}
                      name="password"
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={(event) => {
                              event.preventDefault()
                            }}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password*"
                    />
                  </FormControl>
                  {errors?.password && <div style={{color:"red"}}>{errors?.password}</div>}
                </div>
               
                <div className='mb-4' style={{fontFamily:"sans-serif"}}>
                    Already have an account? <a href="/signIn"> <b>Click here</b> </a>
                </div>
                <div className='mb-4'>
                  <Button variant="contained" onClick={handleSubmit}>Submit</Button> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Registration