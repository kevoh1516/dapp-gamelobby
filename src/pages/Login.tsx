import { Typography, Box, Button, TextField } from '@mui/material';
import React, { useState, useContext } from 'react';
import { AuthContext } from "../context/AuthProvider";
import { ColorContext } from "../context/ColorProvider";
import { useNavigate } from "react-router-dom";
import { retrieveColors } from '../firebase/functions/colors';

export default function Login() {
  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');

  const [logEmail, setLogEmail] = useState('');
  const [logPassword, setLogPassword] = useState('');

  let { signin, signup } = useContext(AuthContext);
  const { setColors, resetColors } = useContext(ColorContext);
  let navigate = useNavigate();

  const handleRegUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegUsername(event.target.value);
  };

  const handleRegEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegEmail(event.target.value);
  };

  const handleRegPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegPassword(event.target.value);
  };

  const handleLogEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogEmail(event.target.value);
  };

  const handleLogPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogPassword(event.target.value);
  };

  const handleSignin = () => {
    console.log("login");
    signin(logEmail, logPassword).then(() => {
      retrieveColors().then((data) => {
        if (data.data) {
          console.log("retrieved colors", data.data);
          setColors(data.data);
        } else {
          resetColors();
        }
        navigate('/');
      });
    }).catch((err) => {
      console.log("error", err);
    });
  }

  const handleSignup = () => {
    signup(regUsername, regEmail, regPassword).then(() => {
      resetColors();
      navigate('/');
    }).catch((err) => {
      console.log("error", err);
    });
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="space-evenly" sx={{height: '100vh'}}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly" sx={{height: 250}}>
        <Typography variant="h3">Login</Typography>

        <TextField label="Email" variant="outlined" value={logEmail} onChange={handleLogEmailChange} sx={{width: '100%'}}/>
        <TextField label="Password" type="password" variant="outlined" value={logPassword} onChange={handleLogPasswordChange} sx={{width: '100%'}}/>

        <Button variant="outlined" sx={{width: '100%'}} onClick={handleSignin}>Login</Button>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly" sx={{height: 310}}>
        <Typography variant="h3">Register</Typography>

        <TextField label="Username" variant="outlined" value={regUsername} onChange={handleRegUsernameChange} sx={{width: '100%'}}/>
        <TextField label="Email" variant="outlined" value={regEmail} onChange={handleRegEmailChange} sx={{width: '100%'}}/>
        <TextField label="Password" type="password" variant="outlined" value={regPassword} onChange={handleRegPasswordChange} sx={{width: '100%'}}/>

        <Button variant="outlined" sx={{width: '100%'}} onClick={handleSignup}>Register</Button>
      </Box>
    </Box>
  );
}