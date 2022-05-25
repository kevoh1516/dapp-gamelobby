import { Link } from "react-router-dom";
import { Grid, Select, Typography, Box, Button, TextField } from '@mui/material';
import { createContext, useState, useContext, useMemo } from 'react';
import './game.css'
import { AuthContext } from "../context/AuthProvider";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let { user, signin, signout } = useContext(AuthContext);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{height: '100%'}}>
      <Typography variant="h1">Login</Typography>

      <TextField id="username" label="Username" variant="outlined" value={username} onChange={handleUsernameChange} />
      <TextField id="password" label="Password" variant="outlined" value={password} onChange={handlePasswordChange} />

      <Button variant="outlined" 
        sx={{
          fontSize: 50,
          padding: 5,
        }}
      >
        <Link to="/" 
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          Back to Lobby
        </Link>
      </Button>
    </Box>
  );
}