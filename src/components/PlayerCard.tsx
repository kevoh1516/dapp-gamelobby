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
import { ColorContext } from '../App'
import { createContext, useState, useContext, useMemo } from 'react';
import { flexbox } from '@mui/system';

interface PlayerProp {
  playerNum: number;
}

const PlayerCard = (props: PlayerProp) => {
  const { colors, setColors } = useContext(ColorContext);
  const [color, setColor] = useState('');
  const [cardColor, setCardColor] = useState('#fff');

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value === 'red') {
      setCardColor('#FFA49E');
      setColors((prevState: any) => {
        return {
          ...prevState,
          redAvail: false
        }
      })
    }

    if (event.target.value === 'yellow') {
      setCardColor('#F5F184');
      setColors((prevState: any) => {
        return {
          ...prevState,
          yellowAvail: false
        }
      })
    }

    if (event.target.value === 'blue') {
      setCardColor('#7E7CE6');
      setColors((prevState: any) => {
        return {
          ...prevState,
          blueAvail: false
        }
      })
    }

    if (event.target.value === 'green') {
      setCardColor('#7DF588');
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
    <Paper 
      sx={{
        width: '100%', 
        height: '100%', 
        padding: 5,
        backgroundColor: cardColor,
      }}
    >
      <Container 
        sx={{
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <Typography variant="h4">Player {props.playerNum}</Typography>

        <FormControl fullWidth sx={{margin: 1}}>
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
    </Paper>
  )
}

export default PlayerCard;