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
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

interface PlayerProp {
  playerNum: number;
}

const bgColors: any = {
  red: '#DB5C4D',
  blue: '#6066FA',
  green: '#52FF57',
  yellow: '#F6FF7E'
}

const axios = require('axios').default;

const PlayerCard = (props: PlayerProp) => {
  const { colors, setColors } = useContext(ColorContext);
  let { user } = useContext(AuthContext);

  const player = 'p' + props.playerNum;

  const handleChange = (event: SelectChangeEvent) => {
    setColors((prevState: any) => {
      const newData = {...prevState};
      if (newData[player]) {
        newData[newData[player]] = false;
      }
      newData[player] = event.target.value;
      newData[event.target.value] = true;

      if (user) {
        axios.put('/uploadColors', {
            colors: newData,
            uid: user.uid,
          })
          .then((res: any) => {
            console.log(res);
          })
          .catch((error: any) => {
            console.log(error);
          });
      }

      return newData;
    });
  };

  return (
    <Paper elevation={5}
      sx={{
        padding: 5,
        backgroundColor: colors[player] ? bgColors[colors[player]] : '#EDEDED',
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
            <MenuItem value="red" disabled={colors.red}>Red</MenuItem>
            <MenuItem value="yellow" disabled={colors.yellow}>Yellow</MenuItem>
            <MenuItem value="green" disabled={colors.green}>Green</MenuItem>
            <MenuItem value="blue" disabled={colors.blue}>Blue</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </Paper>
  )
}

export default PlayerCard;