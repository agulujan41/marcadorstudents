import {Route,Routes} from "react-router-dom"
import './App.css';
import Principal from "./components/Principal";
import Jugadores from "./components/Jugadores";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal/>}/>
      <Route path="/players/:idPlayer" element={<Jugadores/>}/>
    </Routes>
  );
}

export default App;
