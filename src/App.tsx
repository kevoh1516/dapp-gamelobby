import React from 'react';
import logo from './logo.svg';
import { Grid, Select } from '@mui/material';
import PlayerCard from './components/PlayerCard';
import './App.css';
import { createContext, useState, useContext, useMemo } from 'react';
import { Context } from 'vm';

interface ContextState {
  colors: any;
  setColors: any;
}

export const ColorContext = createContext({} as ContextState);

function App() {
  const [colors, setColors] = useState({redAvail: true, blueAvail: true, yellowAvail: true, greenAvail: true});
  const value = useMemo(
    () => ({ colors, setColors }), 
    [colors]
  );

  return (
    <ColorContext.Provider value={value}>
      <div className="App">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center">
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
      </div>
    </ColorContext.Provider>
  );
}

export default App;
