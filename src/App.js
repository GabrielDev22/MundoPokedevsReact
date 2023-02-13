import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HeaderComponent} from "./components/header/headerComponent";
import { InicioPage } from './pages/inicio/inicioPage';
import {UnaLlamadaAlaApiDePokemonPage} from "./pages/unaCard/unaCardPage";
import {MultipleLlamadaApiPage} from "./pages/multipleLlamadasApi/multipleLlamadaApiPage"
import {FavoritoPokemonPage} from "./pages/favoritos/favoritosPokemonPage"

function App() {
  return (
    <div>
        <Router>
        <HeaderComponent/>
          <Routes>
            <Route path='/' element={<InicioPage />}></Route>
            <Route path='/Card' element={<UnaLlamadaAlaApiDePokemonPage />}></Route>
            <Route path='/MultipleCard' element={<MultipleLlamadaApiPage />}></Route>
            <Route path='/MultipleCard' element={<MultipleLlamadaApiPage />}></Route>
            <Route path='/Favoritos' element={<FavoritoPokemonPage />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
