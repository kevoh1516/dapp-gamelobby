import React from 'react';
import logo from './logo.svg';
import { Grid, Select, Typography, Box, Button } from '@mui/material';
import PlayerCard from '../components/PlayerCard';
import { createContext, useState, useContext, useMemo } from 'react';
import { Link } from "react-router-dom";
import ColorProvider from '../context/ColorProvider';

const gridStyle = {
  display: 'flex', 
  justifyContent: 'center'
};

const Lobby = () => {
  return (
    <ColorProvider>
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

        <Button variant="outlined" 
          sx={{
            margin: 20,
            fontSize: 50,
            padding: 5,
          }}
        >        
          <Link to="/game" 
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            Start Game
          </Link>
        </Button>
      </Box>
    </ColorProvider>
  )
}

export default Lobby; 