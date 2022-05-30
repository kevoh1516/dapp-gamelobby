import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Game from "./Game";
import Lobby from "./Lobby";
import Login from "./Login";
import Profile from "./Profile";
import AuthProvider from "../context/AuthProvider";
import ColorProvider from '../context/ColorProvider';

const Routing = () => {
  return (
    <ColorProvider>
      <AuthProvider>    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Lobby />} />
            <Route path="game" element={<Game />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ColorProvider>

  )
}

export default Routing;