import { Grid, Select, Typography, Box, Button } from '@mui/material';
import PlayerCard from '../components/PlayerCard';
import { createContext, useState, useContext, useMemo } from 'react';
import { Link } from "react-router-dom";
import ColorProvider from '../context/ColorProvider';
import './Lobby.css'

const Lobby = () => {
  return (
    <ColorProvider>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly">
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