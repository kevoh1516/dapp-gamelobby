import React from 'react';
import { 
  Container, 
  Typography, 
  Select, 
  MenuItem, 
  SelectChangeEvent, 
  FormControl, 
  InputLabel 
} from '@mui/material';
import { ColorContext } from '../App'
import { createContext, useState, useContext, useMemo } from 'react';

interface PlayerProp {
  playerNum: number;
}

const PlayerCard = (props: PlayerProp) => {
  const { colors, setColors } = useContext(ColorContext);
  const [color, setColor] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value === 'red') {
      setColors((prevState: any) => {
        return {
          ...prevState,
          redAvail: false
        }
      })
    }

    if (event.target.value === 'yellow') {
      setColors((prevState: any) => {
        return {
          ...prevState,
          yellowAvail: false
        }
      })
    }

    if (event.target.value === 'blue') {
      setColors((prevState: any) => {
        return {
          ...prevState,
          blueAvail: false
        }
      })
    }

    if (event.target.value === 'green') {
      setColors((prevState: any) => {
        return {
          ...prevState,
          greenAvail: false
        }
      })
    }

    if (color === 'red') {
      setColors((prevState: any) => {
        return {
          ...prevState,
          redAvail: true
        }
      })
    }

    if (color === 'blue') {
      setColors((prevState: any) => {
        return {
          ...prevState,
          blueAvail: true
        }
      })
    }

    if (color === 'yellow') {
      setColors((prevState: any) => {
        return {
          ...prevState,
          yellowAvail: true
        }
      })
    }

    if (color === 'green') {
      setColors((prevState: any) => {
        return {
          ...prevState,
          greenAvail: true
        }
      })
    }
    setColor(event.target.value as string);
  };

  return (
    <Container>
      <Typography variant="h1">Player {props.playerNum}</Typography>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          label="Color"
          onChange={handleChange}
        >
          <MenuItem value={'red'} disabled={!colors.redAvail}>Red</MenuItem>
          <MenuItem value={'yellow'} disabled={!colors.yellowAvail}>Yellow</MenuItem>
          <MenuItem value={'green'} disabled={!colors.greenAvail}>Green</MenuItem>
          <MenuItem value={'blue'} disabled={!colors.blueAvail}>Blue</MenuItem>
        </Select>
      </FormControl>
    </Container>
  )
}

export default PlayerCard;