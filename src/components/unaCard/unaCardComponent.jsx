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
        speedPokemon = document.querySelector('.speedPokemon');
        

        /* ANIDANDO LOS ELEMENTOS DE LA API AL DOM DE MI PAGINA */
        imagenPokemon.src = data.sprites.other.home.front_default;
        namePokemon.textContent = data.name[0].toUpperCase() + data.name.substring(1);
        numberPokemon.textContent = `Tarjeta: #${data.id.toString().padStart(3,0)}`;
        baseDeExperiencia.textContent = `Experiencia: ${data.base_experience}`;
        pesoPokemon.textContent = `Peso: ${data.weight}`;
        hpPokemon.textContent = `HP: ${data.stats[0].base_stat}`
        ataquePokemon.textContent = `Ataque: ${data.stats[1].base_stat}`
        defensaPokemon.textContent = `Denfesa: ${data.stats[2].base_stat}`
        specialAttackPokemon.textContent = `Especial-Ataque: ${data.stats[3].base_stat}`
        specialDefensePokemon.textContent = `Especial-Defensa: ${data.stats[4].base_stat}`
        speedPokemon.textContent = `Velocidad: ${data.stats[5].base_stat}`

    }
        
    }

    
    return(
        <div>
            <h1 className="tituloApiDePokemon">Llamando a la Api de Pokemon</h1>

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
                            <progress max={200} value={112}></progress>
                            <p className="pesoPokemon">Esperando...</p>
                            <progress max={200} value={112}></progress>
                            <p className="hpPokemon">Esperando...</p>
                            <progress max={200} value={112}></progress>
                            <p className="ataquePokemon">Esperando...</p>
                            <progress max={200} value={112}></progress>
                            <p className="defensaPokemon">Esperando...</p>
                            <progress max={200} value={112}></progress>
                            <p className="specialAttackPokemon">Esperando...</p>
                            <progress max={200} value={112}></progress>
                            <p className="specialDefensePokemon">Esperando...</p>
                            <progress max={200} value={112}></progress>
                            <p className="speedPokemon">Esperando...</p>
                            <progress max={200} value={112}></progress>
                    </div>
                </div>
           </div>


        </div>
    )
}