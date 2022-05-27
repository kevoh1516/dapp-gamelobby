import { Grid, Select, Typography, Box, Button } from '@mui/material';
import PlayerCard from '../components/PlayerCard';
import { createContext, useState, useContext, useMemo, useEffect } from 'react';
import { Link } from "react-router-dom";
import ColorProvider, { ColorContext } from '../context/ColorProvider';
import TopBar from '../components/TopBar';
import { useNavigate } from "react-router-dom";
import { uploadColors, retrieveColors } from '../database/colors';
import { AuthContext } from "../context/AuthProvider";
import useDidMountEffect from '../hooks/useDidMountEffect';

const Lobby = () => {
  let navigate = useNavigate();
  const { colors, setColors } = useContext(ColorContext);
  let { user, signin, signout, signup } = useContext(AuthContext);

  useEffect(() => {
    console.log("user changed");
    if (user) {
      // TODO: retrieve and set colors
      retrieveColors().then((data) => {
        if (data.data) {
          console.log("retrieved colors", data.data);
          setColors(data.data);
        }
      });
    }
  }, [user]);

  return (
    <>
      <TopBar /> 
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly" sx={{height: '150vh'}}>
        <Typography variant='h1'>Game Lobby</Typography>

        <Grid container rowSpacing={10} columnSpacing={10} width="1000px">
          <Grid item xs={6}>
            <PlayerCard playerNum={1} />
          </Grid>
          <Grid item xs={6}>
            <PlayerCard playerNum={2} />
          </Grid>
          <Grid item xs={6}>
            <PlayerCard playerNum={3} />
          </Grid>
          <Grid item xs={6}>
            <PlayerCard playerNum={4} />
          </Grid>
        </Grid>

        <Button variant="outlined"
          sx={{
            fontSize: 50,
            padding: 5,
          }}
          onClick={() => {
            navigate('game');
          }}
        >        
          Start Game
        </Button>
      </Box>
    </>

  )
}

export default Lobby; 