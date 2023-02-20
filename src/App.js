import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HeaderComponent} from "./components/header/headerComponent";
import {UnaLlamadaAlaApiDePokemonPage} from "./pages/unaCard/unaCardPage";
import {MultipleLlamadaApiPage} from "./pages/multipleLlamadasApi/multipleLlamadaApiPage"

function App() {
  return (
    <div>
        <Router>
        <HeaderComponent/>
          <Routes>
            <Route path='/' element={<UnaLlamadaAlaApiDePokemonPage />}></Route>
            <Route path='/MultipleCard' element={<MultipleLlamadaApiPage />}></Route>
            <Route path='/MultipleCard' element={<MultipleLlamadaApiPage />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
