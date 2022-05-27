import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function TopBar() {
  let navigate = useNavigate();
  let { user, signin, signout, signup } = React.useContext(AuthContext);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Lobby
        </Typography>

        {!user 
          ? 
            <Button variant="outlined" color="inherit" onClick={() => {navigate('login')}}>Login</Button>
          : 
            <>
              <Button variant="outlined" color="inherit" onClick={() => {navigate('profile')}} sx={{marginRight: 2}}>          
                {user?.displayName}
              </Button>
              <Button variant="outlined" color="inherit" onClick={() => {signout()}}>Sign out</Button>
            </>
        }
      </Toolbar>
    </AppBar>
  );
}