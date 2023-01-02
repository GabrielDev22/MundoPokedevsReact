import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HeaderComponent} from "./components/header/headerComponent";
import { InicioPage } from './pages/inicio/inicioPage';
import {UnaLlamadaAlaApiDePokemonPage} from "./pages/unaCard/unaCardPage"

function App() {
  return (
    <div>
        <Router>
        <HeaderComponent/>
          <Routes>
            <Route path='/' element={<InicioPage />}></Route>
            <Route path='/Card' element={<UnaLlamadaAlaApiDePokemonPage />}></Route>
            <Route path='/MultipleCard'></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
