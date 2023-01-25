import "./unaCardComponent.css"
import {useState} from "react"
export const UnaLlamadaAlaApiDePokemonComponent = () => {

    const [condicion, setCondicion] = useState(false)

    const llamadaApiDePokemon = (event) => {
        event.preventDefault();
        const { value } = event.target.pokemon;
         fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
         .then((res) => res.json())
         .then((data) => {
            enviandoLosDatosAlDom(data)
         }) 

    const enviandoLosDatosAlDom = (data) => {

        console.log(data)
        const contenedorCard = document.querySelector('.contenedorCard');

        contenedorCard.style.display = 'block';

        /* Contenedor de la Card */
        const imagenPokemon = document.querySelector('.imagenPokemon'),
        namePokemon = document.querySelector('.namePokemon'),
        numberPokemon = document.querySelector('.numberPokemon'),
        baseDeExperiencia = document.querySelector('.baseDeExperiencia'),
        pesoPokemon = document.querySelector('.pesoPokemon'),
        hpPokemon = document.querySelector('.hpPokemon'),
        ataquePokemon = document.querySelector('.ataquePokemon'),
        defensaPokemon = document.querySelector('.defensaPokemon'),
        specialAttackPokemon = document.querySelector('.specialAttackPokemon'),
        specialDefensePokemon = document.querySelector('.specialDefensePokemon'),
        speedPokemon = document.querySelector('.speedPokemon'),
        progressBarPokemonOne = document.querySelector('.progressBarPokemonOne'),
        progressBarPokemonTwo = document.querySelector('.progressBarPokemonTwo'),
        progressBarPokemonThree = document.querySelector('.progressBarPokemonThree'),
        progressBarPokemonFour = document.querySelector('.progressBarPokemonFour'),
        progressBarPokemonFive = document.querySelector('.progressBarPokemonFive'),
        progressBarPokemonSix = document.querySelector('.progressBarPokemonSix'),
        progressBarPokemonSeven = document.querySelector('.progressBarPokemonSeven'),
        progressBarPokemonEight = document.querySelector('.progressBarPokemonEight');
        

        /* ANIDANDO LOS ELEMENTOS DE LA API AL DOM DE MI PAGINA */
        imagenPokemon.src = data.sprites.other.home.front_default;
        namePokemon.textContent = data.name[0].toUpperCase() + data.name.substring(1);
        numberPokemon.textContent = `Tarjeta: #${data.id.toString().padStart(3,0)}`;

        baseDeExperiencia.textContent = `Experiencia: ${data.base_experience}`;
        progressBarPokemonOne.setAttribute("aria-valuenow", data.base_experience)
        progressBarPokemonOne.setAttribute("aria-valuemin", 0);
        progressBarPokemonOne.setAttribute('aria-valuemax', 300);
        progressBarPokemonOne.style.width =  `${data.base_experience}px`;
        progressBarPokemonOne.textContent = data.base_experience;

        pesoPokemon.textContent = `Peso: ${data.weight}`;
        progressBarPokemonTwo.setAttribute('aria-valuenow', data.weight)
        progressBarPokemonTwo.setAttribute('aria-valuemin', 0);
        progressBarPokemonTwo.setAttribute('aria-valuemax', 1000);
        progressBarPokemonTwo.style.width = `${data.weight}px`;
        progressBarPokemonTwo.textContent = data.weight;

        hpPokemon.textContent = `HP: ${data.stats[0].base_stat}`
        progressBarPokemonThree.setAttribute('aria-valuenow', data.stats[0].base_stat)
        progressBarPokemonThree.setAttribute('aria-valuemin', 0);
        progressBarPokemonThree.setAttribute('aria-valuemax', 200);
        progressBarPokemonThree.style.width = `${data.stats[0].base_stat}px`;
        progressBarPokemonThree.textContent = data.stats[0].base_stat;



        ataquePokemon.textContent = `Ataque: ${data.stats[1].base_stat}`
        progressBarPokemonFour.setAttribute('aria-valuenow', data.stats[1].base_stat)
        progressBarPokemonFour.setAttribute('aria-valuemin', 0);
        progressBarPokemonFour.setAttribute('aria-valuemax', 150);
        progressBarPokemonFour.style.width = `${data.stats[1].base_stat}px`;
        progressBarPokemonFour.textContent = data.stats[1].base_stat;

        defensaPokemon.textContent = `Denfesa: ${data.stats[2].base_stat}`
        progressBarPokemonFive.setAttribute('aria-valuenow', data.stats[2].base_stat)
        progressBarPokemonFive.setAttribute('aria-valuemin', 2);
        progressBarPokemonFive.setAttribute('aria-valuemax', 150);
        progressBarPokemonFive.style.width = `${data.stats[2].base_stat}px`;
        progressBarPokemonFive.textContent = data.stats[2].base_stat;

        specialAttackPokemon.textContent = `Especial-Ataque: ${data.stats[3].base_stat}`
        progressBarPokemonSix.setAttribute('aria-valuenow', data.stats[3].base_stat)
        progressBarPokemonSix.setAttribute('aria-valuemin', 0);
        progressBarPokemonSix.setAttribute('aria-valuemax', 200);
        progressBarPokemonSix.style.width = `${data.stats[3].base_stat}px`;
        progressBarPokemonSix.textContent = data.stats[3].base_stat;

        specialDefensePokemon.textContent = `Especial-Defensa: ${data.stats[4].base_stat}`
        progressBarPokemonSeven.setAttribute('aria-valuenow', data.stats[4].base_stat)
        progressBarPokemonSeven.setAttribute('aria-valuemin', 0);
        progressBarPokemonSeven.setAttribute('aria-valuemax', 200);
        progressBarPokemonSeven.style.width = `${data.stats[4].base_stat}px`;
        progressBarPokemonSeven.textContent = data.stats[4].base_stat;

        speedPokemon.textContent = `Velocidad: ${data.stats[5].base_stat}`
        progressBarPokemonEight.setAttribute('aria-valuenow', data.stats[5].base_stat)
        progressBarPokemonEight.setAttribute('aria-valuemin', 0);
        progressBarPokemonEight.setAttribute('aria-valuemax', 200);
        progressBarPokemonEight.style.width = `${data.stats[5].base_stat}px`;
        progressBarPokemonEight.textContent = data.stats[5].base_stat;

        }
    }

    
    return(
        <div>
            <h1 className="tituloApiDePokemon">Busca un Pokemon</h1>

            <form action="" onSubmit={event => llamadaApiDePokemon(event)}>
                <input type="text" name="pokemon" placeholder="Pokemon" className="inputLlamadPokemon" />
                <button className="botonDeReinicio" onClick={() => setCondicion(!condicion)}>New Pokemons</button>
            </form>
            
           <div className="contenedorCard" style={{display: 'none'}}>
                <div className="contenedorDeImagen">
                    <img src="" className="imagenPokemon" alt="" />
                    <div className="contenidoStat">
                        <h2 className="namePokemon">Esperando...</h2>
                            <p className="numberPokemon">Esperando...</p> 
                            <p className="baseDeExperiencia">Esperando...</p>
                            <div className="progressBarContenedor"><div className="progressBarPokemonOne"></div></div>
                            <p className="pesoPokemon">Esperando...</p>
                            <div className="progressBarContenedor"><div className="progressBarPokemonTwo"></div></div>
                            <p className="hpPokemon">Esperando...</p>
                            <div className="progressBarContenedor"><div className="progressBarPokemonThree"></div></div>
                            <p className="ataquePokemon">Esperando...</p>
                            <div className="progressBarContenedor"><div className="progressBarPokemonFour"></div></div>
                            <p className="defensaPokemon">Esperando...</p>
                            <div className="progressBarContenedor"><div className="progressBarPokemonFive"></div></div>
                            <p className="specialAttackPokemon">Esperando...</p>
                            <div className="progressBarContenedor"><div className="progressBarPokemonSix"></div></div>
                            <p className="specialDefensePokemon">Esperando...</p>
                            <div className="progressBarContenedor"><div className="progressBarPokemonSeven"></div></div>
                            <p className="speedPokemon">Esperando...</p>
                            <div className="progressBarContenedor"><div className="progressBarPokemonEight"></div></div>
                    </div>
                </div>
           </div>


        </div>
    )
}