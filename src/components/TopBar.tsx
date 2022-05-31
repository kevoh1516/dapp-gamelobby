import * as React from 'react';
import { Avatar, AppBar, Toolbar, Typography, Button } from '@mui/material';
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
              <Avatar src={user?.photoURL ?? ''} sx={{marginRight: 2}}/>
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
