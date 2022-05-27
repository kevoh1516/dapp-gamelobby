import { Link } from "react-router-dom";
import { Grid, Select, Typography, Box, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function Game() {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" 
      sx={{
        height: '100%'
      }}
    >
      <Typography variant="h1">Game Over!</Typography>
      <Button variant="outlined" 
        sx={{
          fontSize: 50,
          padding: 5,
        }}
        onClick={() => {
          navigate('/');
        }}
      >        
        Back To Lobby
      </Button>
    </Box>
  );
}