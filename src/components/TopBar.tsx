import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function TopBar() {
  let navigate = useNavigate();
  let { user, signout } = React.useContext(AuthContext);

  return (
    <AppBar position="fixed">
      <Toolbar>

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
