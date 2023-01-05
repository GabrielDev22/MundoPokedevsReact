import "./unaCardComponent.css"
import {useState, useEffect } from "react"
export const UnaLlamadaAlaApiDePokemonComponent = () => {

    const [condicion, setCondicion] = useState(false)

    const llamadaApiDePokemon = () => {
         fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data)
            enviandoLosDatosAlDom(data)
         })

    const enviandoLosDatosAlDom = (data) => {
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

    useEffect(() => {
        llamadaApiDePokemon()
    },[condicion])

    
    return(
        <div>
            <h1 className="tituloApiDePokemon">Llamando a la Api de Pokemon</h1>
            
           <div className="contenedorCard">
                <div className="imagenContainer">
                    <img src="" className="imagenPokemon" alt="" />
                    <div className="contenidoStat">
                        <h2 className="namePokemon">Esperando...</h2>
                            <p className="numberPokemon">Esperando...</p> 
                            <p className="baseDeExperiencia">Esperando...</p>
                            <p className="pesoPokemon">Esperando...</p>
                            <p className="hpPokemon">Esperando...</p>
                            <p className="ataquePokemon">Esperando...</p>
                            <p className="defensaPokemon">Esperando...</p>
                            <p className="specialAttackPokemon">Esperando...</p>
                            <p className="specialDefensePokemon">Esperando...</p>
                            <p className="speedPokemon">Esperando...</p>
                    </div>
                </div>
           </div>
                <button className="botonDeReinicio" onClick={() => setCondicion(!condicion)}>New Pokemons</button>


        </div>
    )
}