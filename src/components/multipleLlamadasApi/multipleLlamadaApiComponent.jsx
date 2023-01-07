import "./multipleLlamadaApiComponent.css"
export const MultipleLlamadaApiComponent = () => {

    const getData = (id) =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            createPokemons(data)
        }) 
    }

    const pokemons = (number) => {
        for(let i = 1; i <= number; i++){
            getData(i)
        }
    }

    const createPokemons = (pokemons) => {

        const contenedorCards = document.querySelector('.contenedorLibros');

        //Creacion de elementos
        const imagenContainer = document.createElement('div'),
              imagenPokemon = document.createElement('img'),
              contenidoStat = document.createElement('div'),
              namePokemon = document.createElement('h2'),
              numberPokemon = document.createElement('p'),
              baseDeExperiencia = document.createElement('p'),
              pesoPokemon = document.createElement('p'),
              hpPokemon = document.createElement('p'),
              ataquePokemon = document.createElement('p'),
              defensaPokemon = document.createElement('p'),
              specialAttackPokemon = document.createElement('p'),
              specialDefensePokemon = document.createElement('p'),
              speedPokemon = document.createElement('p');

         //Dandoles clases

        imagenContainer.classList.add('imagenContainer')
        imagenPokemon.classList.add('imagenesPokemones')
        contenidoStat.classList.add('contenidoStat')
        namePokemon.classList.add('namePokemons')
        numberPokemon.classList.add('numberPokemons')
        baseDeExperiencia.classList.add('baseDeExperienciaPokemons')
        pesoPokemon.classList.add('pesoPokemons')
        hpPokemon.classList.add('hpPokemons')
        ataquePokemon.classList.add('ataquePokemons')
        defensaPokemon.classList.add('defensaPokemons')
        specialAttackPokemon.classList.add('specialAttackPokemons')
        specialDefensePokemon.classList.add('specialDefensePokemons')
        speedPokemon.classList.add('speedPokemons')

        imagenPokemon.src = pokemons.sprites.other.home.front_default;
        namePokemon.textContent = pokemons.name[0].toUpperCase() + pokemons.name.substring(1);
        numberPokemon.textContent = `Tarjeta: #${pokemons.id.toString().padStart(3,0)}`;
        baseDeExperiencia.textContent = `Experiencia: ${pokemons.base_experience}`;
        pesoPokemon.textContent = `Peso: ${pokemons.weight}`;
        hpPokemon.textContent = `HP: ${pokemons.stats[0].base_stat}`
        ataquePokemon.textContent = `Ataque: ${pokemons.stats[1].base_stat}`
        defensaPokemon.textContent = `Denfesa: ${pokemons.stats[2].base_stat}`
        specialAttackPokemon.textContent = `Especial-Ataque: ${pokemons.stats[3].base_stat}`
        specialDefensePokemon.textContent = `Especial-Defensa: ${pokemons.stats[4].base_stat}`
        speedPokemon.textContent = `Velocidad: ${pokemons.stats[5].base_stat}` 

        // Anidando los elementos al dom

        contenidoStat.appendChild(namePokemon)
        contenidoStat.appendChild(numberPokemon)
        contenidoStat.appendChild(baseDeExperiencia)
        contenidoStat.appendChild(pesoPokemon)
        contenidoStat.appendChild(hpPokemon)
        contenidoStat.appendChild(ataquePokemon)
        contenidoStat.appendChild(defensaPokemon)
        contenidoStat.appendChild(specialAttackPokemon)
        contenidoStat.appendChild(specialDefensePokemon)
        contenidoStat.appendChild(speedPokemon)

        // Anidando los elementos segunda parte
        imagenContainer.appendChild(imagenPokemon)
        imagenContainer.appendChild(contenidoStat)

        //Anidando los elementos tercera parte
        contenedorCards.appendChild(imagenContainer);

    }
    pokemons(20);
    
    
    return(
        <div>
            <h1 className="tituloLibroPokemon">Libros de Pokemons</h1>

            <div className="contenedorLibros">
                
           </div>
        </div>
    )
}