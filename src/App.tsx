import React from 'react';
import logo from './logo.svg';
import { Grid, Select, Typography, Box } from '@mui/material';
import PlayerCard from './components/PlayerCard';
import './App.css';
import { createContext, useState, useContext, useMemo } from 'react';
import { Context } from 'vm';

interface ContextState {
  colors: any;
  setColors: any;
}

export const ColorContext = createContext({} as ContextState);

const gridStyle = {
  display: 'flex', 
  justifyContent: 'center'
};

function App() {
  const [colors, setColors] = useState({redAvail: true, blueAvail: true, yellowAvail: true, greenAvail: true});
  const value = useMemo(
    () => ({ colors, setColors }), 
    [colors]
  );

  return (
    <ColorContext.Provider value={value}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant='h1' padding={10}>Game Lobby</Typography>
        <Grid container rowSpacing={15} columnSpacing={20} alignItems="center" paddingX={30}>
          <Grid item xs={6} sx={gridStyle}>
            <PlayerCard playerNum={1} />
          </Grid>
          <Grid item xs={6} sx={gridStyle}>
            <PlayerCard playerNum={2} />
          </Grid>
          <Grid item xs={6} sx={gridStyle}>
            <PlayerCard playerNum={3} />
          </Grid>
          <Grid item xs={6} sx={gridStyle}>
            <PlayerCard playerNum={4} />
          </Grid>
        </Grid>
      </Box>
    </ColorContext.Provider>
  );
}

export default App;
