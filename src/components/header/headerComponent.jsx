import "./headerComponent.css"
import {Link} from "react-router-dom"
export const HeaderComponent = () => {
    return(
        <div>
            <nav className="navBar">
                <ul className="listadoDePaginas">

                    <li className="linkDePaginas">
                        <Link to="/" className="urlPaginas">Pokemon</Link>
                    </li>

                    <li className="linkDePaginas">
                        <Link to="/MultipleCard" className="urlPaginas">Libro de Cartas</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}