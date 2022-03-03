import React, { Fragment,useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';

import Loader from '../Loader/Loader';

import {useAlert} from 'react-alert'
import { useDispatch,useSelector } from 'react-redux';
import {login,clearErrors} from '../../Services/Actions/userAction'


// import NoteContext from '../../Context/notes/NoteContext'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, containerClasses } from '@mui/material'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useNavigate} from 'react-router-dom';
import '../Login/login.css'

const Login = () => {
  const navigate = useNavigate();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  // const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading} = useSelector(state =>state.auth);
  useEffect(()=>{
    if(isAuthenticated){
      navigate("/dashboard");
    }
    if(error){
      // alert.error(error);
      dispatch(clearErrors());
    }
  },
  // [dispatch,alert,isAuthenticated,error,navigate]
  [dispatch,isAuthenticated,error,navigate]
  )



  const avatarStyle = { backgroundColor: '#1bbd7e' }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email,password))
   
};
  // const a = useContext(NoteContext)

  return (
    <Grid>
      <Paper elevation={10} className='paperStyle'>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField label='Username' placeholder='Enter username' value={email} onChange={(e)=>setEmail(e.target.value)} fullWidth required />
        <TextField label='Password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} type='password' fullWidth required />
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Remember me"
        />
      
          <Button type='submit' variant="contained" className='btnstyle' fullWidth onClick={onSubmit} >Sign in</Button>
      


      </Paper>
    </Grid>
  )
}

export default Login