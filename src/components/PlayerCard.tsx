import React from 'react';
import { 
  Container, 
  Typography, 
  Select, 
  MenuItem, 
  SelectChangeEvent, 
  FormControl, 
  InputLabel,
  Paper
} from '@mui/material';
import { ColorContext } from '../context/ColorProvider';
import { createContext, useState, useContext, useMemo } from 'react';
import { flexbox } from '@mui/system';
import { uploadColors, retrieveColors } from '../database/colors';
import { AuthContext } from '../context/AuthProvider';

interface PlayerProp {
  playerNum: number;
}

const bgColors = {
  red: '#DB5C4D',
  blue: '#6066FA',
  green: '#52FF57',
  yellow: '#F6FF7E'
}

const PlayerCard = (props: PlayerProp) => {
  const { colors, setColors } = useContext(ColorContext);
  let { user, signin, signout, signup } = useContext(AuthContext);

  const player = 'p' + props.playerNum;

  const handleChange = (event: SelectChangeEvent) => {
    // event.target.value
    setColors((prevState: any) => {
      const newData = {...prevState};
      if (newData[player]) {
        newData.taken[newData[player]] = false;
      }
      newData[player] = event.target.value;
      newData.taken[event.target.value] = true;

      if (user) {
        uploadColors(newData);
      }

      return newData;
    });
  };

  return (
    <Paper elevation={5}
      sx={{
        padding: 5,
        backgroundColor: colors[player] || '#EDEDED',
      }}
    >
      <Container 
        sx={{
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4">Player {props.playerNum}</Typography>

        <FormControl fullWidth sx={{margin: 1}}>
          <InputLabel id="demo-simple-select-label">Color</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={colors[player]}
            label="Color"
            onChange={handleChange}
          >
            <MenuItem value={bgColors.red} disabled={colors.taken[bgColors.red]}>Red</MenuItem>
            <MenuItem value={bgColors.yellow} disabled={colors.taken[bgColors.yellow]}>Yellow</MenuItem>
            <MenuItem value={bgColors.green} disabled={colors.taken[bgColors.green]}>Green</MenuItem>
            <MenuItem value={bgColors.blue} disabled={colors.taken[bgColors.blue]}>Blue</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </Paper>
  )
}

export default PlayerCard;