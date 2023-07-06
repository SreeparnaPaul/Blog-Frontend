import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { Button,OutlinedInput,InputAdornment,IconButton,InputLabel,FormControl,Fab } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from 'react-router-dom';
import { Link} from 'react-router-dom';
import login from "../assets/login.jpg"
import { useDispatch } from "react-redux";
import { createUsers } from '../store/user';
import { sweetAlert } from "../utils/sweetAlert";
function Registration() {
    const [signInFormData,setSignInFormData]=useState({
        email:"",
        password:"",
        firstName:"",
        lastName:"",
        phone:"",
        confirmPassword:"",
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
    const dispatch = useDispatch()
      const handleSubmit = async (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        console.log(signInFormData,"line37");
        if (Object.keys(formErrors).length === 0) {
            setLoader(true)
            dispatch(createUsers(signInFormData))
            .then(() => {
              setLoader(false);
              sweetAlert("Success", "User registered successfully", "success");
             history.push("/signIn")
            })
            .catch((error) => {
              setLoader(false);
              sweetAlert("Something went wrong", error.message, "danger", "Close");
              console.error(error,"line48");
            });
        } else {
          setLoader(false);
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
          if (!signInFormData.phone.trim()) {
            formErrors.phone = 'Phone number is required';
          }
        if (!signInFormData.password.trim()) {
            formErrors.password = 'Password is required';
          } 
          if (!signInFormData.confirmPassword.trim()) {
            formErrors.confirmPassword = 'Password is required';
          } 
          if (!signInFormData.firstName.trim()) {
            formErrors.username = 'First name is required';
          } 
          if (!signInFormData.lastName.trim()) {
            formErrors.username = 'Last name is required';
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
        <div className="col-lg-5 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5 text-center" style={{marginTop:"10%"}}>
            <div className='card' style={{display:"flex",justifyContent:"center",marginTop:"5%"}}>
              <div className='card-body'>
                <Fab color="primary" aria-label="add">
                  <LockIcon />
                </Fab>
                <h4 style={{fontFamily:"sans-serif",marginTop:"10px"}}>Sign up to BlogiFy</h4>
                <div className='row'>
                <div className='col-6 mb-4'>
                  <TextField sx={{ m: 1, width: '90%' }} id="outlined-basic" label="First Name*" type="text" name ="firstName" variant="outlined" value={signInFormData?.firstName} onChange={handleChange}/>
                  {errors?.firstName && <div style={{color:"red"}}>{errors?.firstName}</div>}
                </div>
                <div className='col-6 mb-4'>
                <TextField sx={{ m: 1, width: '90%' }} id="outlined-basic" label="Last Name*" type="text" name ="lastName" variant="outlined" value={signInFormData?.lastName} onChange={handleChange}/>
                {errors?.lastName && <div style={{color:"red"}}>{errors?.lastName}</div>}
              </div>
              </div>
              <div className='row'>
              <div className='col-6 mb-4'>
                  <TextField sx={{ m: 1, width: '90%' }} id="outlined-basic" label="Email Address*" type="email" name ="email" variant="outlined" value={signInFormData?.email} onChange={handleChange}/>
                  {errors?.email && <div style={{color:"red"}}>{errors?.email}</div>}
                </div>
                <div className='col-6 mb-4'>
                <TextField sx={{ m: 1, width: '90%' }} id="outlined-basic" label="Phone Number*" type="number" name ="phone" variant="outlined" value={signInFormData?.phone} onChange={handleChange}/>
                {errors?.phone && <div style={{color:"red"}}>{errors?.phone}</div>}
              </div>
                </div>
                <div className='row'>
              <div className='col-6 mb-4'>
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
                <div className='col-6 mb-4'>
                <FormControl sx={{ m: 1, width: '90%' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Confirm Password*</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={signInFormData?.confirmPassword}
                    name="confirmPassword"
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
                    label="Confirm Password*"
                  />
                </FormControl>
                {errors?.confirmPassword && <div style={{color:"red"}}>{errors?.confirmPassword}</div>}
              </div>
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