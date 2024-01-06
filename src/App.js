import {Route,Routes} from "react-router-dom"
import './App.css';
import Principal from "./components/Principal";
import Jugadores from "./components/Jugadores";
import Error from "./components/Error";
import Error404 from "./components/Error404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal/>}/>
      <Route path="/players/:idPlayer" element={<Jugadores/>}/>
      <Route path="/error" element={<Error/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
  );
}

export default App;
