import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Game from "./Game";
import Lobby from "./Lobby";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;