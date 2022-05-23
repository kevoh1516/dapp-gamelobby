import { Link } from "react-router-dom";
import { Grid, Select, Typography, Box, Button } from '@mui/material';
import './game.css'

export default function Expenses() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{height: '100%'}}>
      <Typography variant="h1">Game Over!</Typography>
      <Button variant="outlined" 
        sx={{
          fontSize: 50,
          padding: 5,
        }}
      >        
        <Link to="/" 
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          Back to Lobby
        </Link>
      </Button>
    </Box>
  );
}