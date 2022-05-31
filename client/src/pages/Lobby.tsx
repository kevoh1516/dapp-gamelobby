import { Grid, Typography, Box, Button } from '@mui/material';
import PlayerCard from '../components/PlayerCard';
import TopBar from '../components/TopBar';
import { useNavigate } from "react-router-dom";

const Lobby = () => {
  let navigate = useNavigate();

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