import "./inicioComponent.css"
import {Link} from "react-router-dom"
export const InicioComponent = () => {
    return(
        <div>

            <h1 className="TituloInicio">Bienvenido al mundo de los Pokemons</h1>


            <div className="contenedorPokemon">
                <div className="contenidoPokemon">
                    <h2 className="tituloSeccion">¿Que son los Pokémon?</h2>
                    <hr />
                    <p className="informacionPokemon">
                        La saga de videojuegos es desarrollada por la compañía programadora de software japonesa Game Freak, con personajes creados por Satoshi Tajiri para la empresa de juguetes Creatures Inc., y a su vez distribuida por Nintendo. La misión en estos juegos es capturar y entrenar a los pokémon (criaturas cuya denominación da nombre al juego), que hasta la fecha alcanzan el número de 1010. La posibilidad de intercambiarlos le hizo conseguir una popularidad que se plasmó en un éxito de ventas y la consiguiente aparición de una serie animada, películas y diverso merchandising como peluches, juguetes y cartas.
                    </p>

                    <p className="informacionPokemon">
                        La saga de videojuegos es desarrollada por la compañía programadora de software japonesa Game Freak, con personajes creados por Satoshi Tajiri para la empresa de juguetes Creatures Inc., y a su vez distribuida por Nintendo. La misión en estos juegos es capturar y entrenar a los pokémon (criaturas cuya denominación da nombre al juego), que hasta la fecha alcanzan el número de 1010. La posibilidad de intercambiarlos le hizo conseguir una popularidad que se plasmó en un éxito de ventas y la consiguiente aparición de una serie animada, películas y diverso merchandising como peluches, juguetes y cartas.
                    </p>

                    <p className="informacionPokemon">
                        La producción de los videojuegos, serie de anime y demás material para su distribución en occidente fue realizada en Estados Unidos por 4Kids Entertainment hasta noviembre de 2005, momento en que decidió no renovar su contrato con Pokémon USA (una subsidiaria de Pokémon Company). Actualmente esta supervisa todo lo referente al material de Pokémon en su distribución en occidente.
                    </p>
                </div>
            </div>

            <div className="contenedorIndice">
                <div className="contenidoIndice">
                    <h4 className="tituloIndice">Indice </h4>
                    <ul className="listadoIndice">
                        <li className="listaDeSecciones">
                            <Link to='#contenedorEtimologia' className="linkDeLosIndices"><span>1.</span> Etimologia</Link>
                            <Link to='#contenedorHistoria' className="linkDeLosIndices"><span>2.</span> Historia</Link>

                            <Link to='/' className="linkDeLosIndices"><span>3.</span>Concepto</Link>

                            <Link to='/' className="linkDeLosIndices"><span>4.</span>Mecanica del juego</Link>

                            <Link to='/' className="linkDeLosIndices"><span>5.</span> VideoJuegos</Link>

                            <Link to='/' className="linkDeLosIndices"><span>6.</span>Medios relacionados</Link>

                            <Link to='/' className="linkDeLosIndices"><span>7.</span>Criticas y controversias</Link>

                            <Link to='/' className="linkDeLosIndices"><span>8.</span>Impacto en la cultura popular</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="contenedorEtimologia" id="contenedorEtimologia">
                <div className="contenidoEtimologia">
                    <h2 className="tituloSeccion">Etimologia</h2>
                    <hr />
                    <p className="informacionEtimologia">
                        La palabra Pokémon es la contracción romanizada de la marca japonesa Pocket Monsters, como tales contracciones son muy comunes en Japón.
                    </p>

                    <p className="informacionEtimologia">
                        En inglés, la palabra se escribe Pokémon con tilde en acento agudo, a pesar de que este signo no existe en el uso habitual de este idioma. Esto se debe a que al unir las palabras Pocket Monster se obtuvo Poke-Mon. El problema es que, según las normas del inglés, esto se pronunciaría como pouk mon. En muy pocos otros casos (como maté que se pronuncia /mátei/ y quiere decir mate) se puede poner en inglés un acento en la "e" para que esta se pronuncie, resultando así el nombre "Pokémon". En español se puede usar la transcripción rōmaji que prescinde del acento por razones ortográficas, si bien en el uso comercial habitualmente aparece usando tilde.
                    </p>

                    <p className="informacionEtimologia">
                        Sobre la pronunciación de los hispanohablantes en el caso de Hispanoamérica, por el doblaje del anime, que suele ser más cercano al estadounidense, se pronuncia /pokemón/. En España se pronuncia /pokemon/ de con acento llano.
                    </p>

                    <p className="informacionEtimologia">
                        El término Pokémon, además de referirse a la franquicia en sí, puede aludir colectivamente a las 1010 especies ficticias que han aparecido en los diversos medios de la franquicia. Como marca registrada es invariable: los Pokémon. Como voz lexicalizada, ya escrita en minúscula y sin tilde, si nos atenemos a su pronunciación original, pluralizaría según la RAE en -es: los pokémones. Sin embargo en los juegos pokémon es plural y singular.
                    </p>
                </div>
            </div>

            <div className="contenedorHistoria" id="contenedorHistoria">
                <div className="contenidoHistoria">
                    <h2 className="tituloSeccion">Historia</h2>
                    <hr />
                    <p className="informacionHistoria">
                        Cuando el creador, Satoshi Tajiri, era joven, uno de sus pasatiempos favoritos era la recolección y colección de insectos.Tajiri se dirigió a la ciudad de Tokio a estudiar, ya que su padre quería que fuese ingeniero. Sin embargo, a Tajiri no le agradaba la idea de estudiar y se dedicaba más a pasatiempos como los videojuegos. Pasó un tiempo y Tajiri llegó a trabajar como jugador de prueba de algunos juegos para revistas, junto a Ken Sugimori, con quien hizo una gran amistad. En 1989 crearon una revista llamada Game Freak.
                    </p>

                    <p className="informacionHistoria">
                        Con el éxito de la consola NES, los dos decidieron crear algo innovador para la consola, y Tajiri decidió hacer que Game Freak se convirtiera en una compañía. Comenzó a trabajar en un juego de rompecabezas llamado Mendel Palace (conocido en Japón como Quinty), el cual fue lanzado en 1989, obteniendo buen éxito, lo cual marcó el principio de la historia de la compañía.
                    </p>

                    <p className="informacionHistoria">
                        Al año siguiente, los dos habían decidido crear un juego para la consola Game Boy. Tajiri al ver el Game Link Cable, tuvo la idea de un juego en donde se pudiera transferir información de una Game Boy a otra. Influenciado por sagas como Final Fantasy y Dragon Quest, Tajiri asoció la idea de la metamorfosis. Tajiri creó un RPG en donde los monstruos podrían evolucionar y ser transportados de una consola portátil a otra.
                    </p>

                    <p className="informacionHistoria">
                        El proyecto fue enviado a Nintendo. Mientras que Tajiri era quien tenía la idea principal, Sugimori era el encargado de los diseños de los monstruos. Así mismo, recibieron consejos por parte de Shigeru Miyamoto (creador de Mario Bros.) para mejorar el juego, que en ese entonces recibía el nombre de Capsule Monster.
                    </p>

                    <p className="informacionHistoria">
                        La producción de este proyecto duró cinco años. En aquel tiempo, la consola Game Boy entró en declive por la escasez de nuevos juegos, debido a que la compañía Nintendo ya no tenía más ideas para la consola portátil. Por otro lado, Game Freak estuvo con carencia de acciones y recursos, por lo que su situación entró en jaque. Luego de esto, el proyecto de Tajiri fue renombrado como Pocket Monsters. En febrero de 1996 se lanzaron al mercado Pocket Monsters Aka and Midori ("Red" y "Green") Inicialmente el juego no tuvo éxito, pero al alcanzar un año, se había llegado a la marca de millón de copias.
                    </p>

                    <p className="informacionHistoria">
                        Al ver esto, Nintendo decidió enviar la serie a occidente. El nombre fue abreviado a Pokémon debido a que había una serie de Mattel conocida como Monster in My Pocket. Los juegos Pokémon Red y Blue se convirtieron en un éxito en los Estados Unidos, con más de 200.000 copias vendidas en la primera semana.
                    </p>
                </div>
            </div>

            <div className="contenedorConcepto">
                <div className="contenidoConcepto">
                    <h2 className="tituloSeccion">Concepto</h2>
                    <hr />
                    <p className="informacionConcepto">
                        Los Pokémon son una clase de criaturas inspiradas en animales reales, insectos, objetos, plantas o criaturas mitológicas con un sistema de evolución lamarckiano. Los jugadores toman el papel Entrenadores Pokémon y tienen tres objetivos generales: completar la Pokédex mediante la recopilación de todas las especies de Pokémon disponibles que se encuentran, entrenar un equipo de Pokémon poderosos de aquellos que han atrapado para competir contra otros entrenadores. El objetivo final del juego es llegar a ganar la Liga Pokémon y convertirse en el campeón regional. La temática de coleccionar, entrenar y luchar están presentes en casi todas las versiones de la franquicia Pokémon, incluidos los videojuegos, las series de anime y manga, y el juego de cartas coleccionables Pokémon.
                    </p>

                    <p className="informacionConcepto">
                        En la saga principal, el jugador emprenderá un viaje en el que deberá recorrer una región específica del mundo Pokémon. En determinadas ciudades existen una serie de poderosos entrenadores, conocidos como Líderes de Gimnasio, que el entrenador debe derrotar para obtener las medallas de gimnasio y poder progresar. Una vez que se recogen todas las medallas de la región, el entrenador es elegible para desafiar la Liga Pokémon de la región, donde le esperan cuatro de los mejores entrenadores a los que se deberá enfrentar para obtener el título de Campeón.
                    </p>

                    <p className="informacionConcepto">
                        La saga también tiene arcos argumentales secundarios: En la mayoría de títulos existe un equipo antagonista, una banda cuyos planes están relacionados con el tráfico, la explotación o el maltrato de Pokémon y que el jugador deberá derrotar. Muchos títulos también implican que el jugador pueda desentrañar misterios sobre la existencia de Pokémon legendarios o míticos.
                    </p>
                </div>
            </div>

            <div className="contenedorMecanicaDelJuego">
                <div className="contendioMecanicaDelJuego">
                    <h2 className="tituloSeccion">Mecanica del Juego</h2>
                    <hr />
                    <h4 className="tituloMecaniDelJuego">Entrenador Pokemon</h4>
                        <p className="informacionMecanicaDelJuego">
                            A los usuarios de los videojuegos se los denomina Entrenador Pokémon. Tienen como meta cumplir dos objetivos (en la mayoría de los juegos de Pokémon): capturar a todas las especies de pokémon disponibles en la región ficticia en donde se encuentra ambientado el juego, y completar así la información de todos los pokémon en el Pokédex; por otro lado, deben entrenarlos y enfrentarlos a otros pokémon pertenecientes a otros entrenadores para demostrar sus habilidades, fortaleza, talento y así convertirse en un Maestro Pokémon. Para lograrlo, los entrenadores pokémon viajan a lo largo y ancho de las regiones del mundo Pokémon, recolectando medallas de gimnasio, que se obtienen tras derrotar a los respectivos líderes de gimnasio, en una batalla en la que tanto el entrenador como el líder de gimnasio enfrentan a sus pokémon para probar sus habilidades especiales en una batalla Pokémon.
                        </p>
                   

                    <h4 className="tituloMecaniDelJuego">Tips de Pokemon</h4>
                        <p className="informacionMecanicaDelJuego">
                            Existen 18 tipos en los que se organiza a los pokémon. Los tipos acero y siniestro fueron agregados en el año 2000, en los juegos Gold, Silver y Crystal y el tipo hada fue agregado el 2013 en los juegos Pokémon X e Y. Los pokémon pueden aprender ataques distintos a los de su tipo. Por ejemplo, Kabutops (Agua/Roca) puede aprender el movimiento Pokémon Giga drenado que es de tipo planta.
                        </p>

                        <p className="informacionMecanicaDelJuego">
                            Cada pokémon tiene una cantidad determinada de movimientos o ataques que puede aprender. Estos se pueden clasificar por su tipo o elemento (por ejemplo, el ataque trueno es un ataque tipo eléctrico).
                        </p>

                        <p className="informacionMecanicaDelJuego">
                            Los pokémon también se ordenan y dividen de esta manera, dándole ventajas o desventajas contra otros. Por ejemplo: un pokémon tipo agua tiene más probabilidad de vencer a un pokémon tipo fuego, que uno tipo planta, ya que los ataques de tipo agua apagan el fuego, mientras que los ataques de tipo fuego queman las plantas. A las plantas, por su parte, ya que crecen con el agua, esta no les causa mucho daño. Esta secuencia, se compararía con el popular juego piedra, papel o tijera.
                        </p>
                   

                    <h4 className="tituloMecaniDelJuego">Pokemon Inicial</h4>
                        <p className="informacionMecanicaDelJuego">
                            Uno de los aspectos constantes de los videojuegos de Pokémon desde sus inicios es que al iniciarse el juego, los jugadores reciben su primer pokémon como regalo del Profesor Local (esto depende de la región en donde este ambientado el juego), un personaje experto en pokémon.
                        </p>

                        <p className="informacionMecanicaDelJuego">
                            Los entrenadores reciben un pokémon inicial o principiante para poder comenzar con su trayecto en el juego. La cantidad establecida de pokémon iniciales es de tres, de los cuales los entrenadores pueden elegir uno solo. Siempre son de los tipo agua, tipo fuego y tipo hierba. (un Pokémon por tipo).Por ejemplo, en las versión Pokémon Edición Roja y Pokémon Edición Azul (y su respectivos remakes: Pokémon Rojo Fuego y Pokémon Verde Hoja), el jugador tiene la opción de elegir como su pokémon a Bulbasaur (tipo hierba), Charmander (tipo fuego), y Squirtle (tipo agua).
                        </p>

                        <p className="informacionMecanicaDelJuego">
                            Sin embargo, en Pokémon Edición Amarilla, el entrenador recibe como su pokémon inicial a Pikachu (un pokémon ratón tipo eléctrico, famoso por ser la mascota de la franquicia). Sin embargo, tras los lanzamientos de Pokémon Edición Roja y Pokémon Edición Azul, Pikachu puede ser obtenido durante su búsqueda en la trayectoria del juego por un solo jugador, algo que no fue posible en ninguna otra entrega de la franquicia, hasta el lanzamiento de Pokémon X y Pokémon Y. Otro aspecto constante es que el rival del jugador, un personaje que también se hace entrenador a la vez que el jugador, elegirá siempre a un pokémon que tenga ventaja sobre el del protagonista. Por ejemplo: si el jugador escoge a un pokémon tipo hierba, el rival escogerá siempre a un pokémon tipo fuego como su pokémon inicial. En Pokémon Edición Amarilla, el rival escoge a Eevee, el cual puede ser evolucionado a un Jolteon, Vaporeon, o Flareon, dependiendo del resultado de la batalla entre el jugador y el rival.
                        </p>
                   

                    <h4 className="tituloMecaniDelJuego">Pokedex</h4>
                        <p className="informacionMecanicaDelJuego">
                            El pokédex en el mundo ficticio de Pokémon, es un dispositivo electrónico que interviene en los videojuegos y la serie de anime. En los juegos, su función es registrar los datos de un pokémon. En el manga y el anime, el Pokédex es una enciclopedia electrónica, la cual proporciona al entrenador información sobre un pokémon que es desconocido con tan solo exponer el pokédex en frente del pokémon.
                        </p>

                        <p className="informacionMecanicaDelJuego">
                            En los videojuegos un entrenador recibe una pokédex en blanco al iniciar su recorrido. El objetivo es completar la información de todos los pokémon disponibles en la región en donde se encuentre. El entrenador recibirá el nombre y la imagen del pokémon que haya sido encontrado. En Pokémon Red y Blue, el pokédex registra la información de cada pokémon con tan solo verlo. La información más detallada de un pokémon se encuentra disponible después de que el entrenador haya capturado a un pokémon salvaje. Esta información incluye tipo, altura, peso, técnicas, y una descripción breve del pokémon.
                        </p>

                        <p className="informacionMecanicaDelJuego">
                            Las versiones actuales del pokédex contienen toda la información de los pokémon conocidos. En los juegos de GameCube, Pokémon Colosseum y Pokémon XD: Gale of Darkness, se utiliza el Pokémon Digital Assistant (PDA), que es similar al pokédex.
                        </p>

                        <p className="informacionMecanicaDelJuego">
                            En la región de Alola, la pokédex es distinta al resto de regiones, pues esta queda implantada en un Rotom, un Pokémon que tiene la cualidad de meterse en electrodomésticos y en otros objetos electrónicos. Esta Pokédex cuenta con lo último en tecnología punta de la región, pues no solo se delimita a registrar entradas de los nuevos Pokémon, también es capaz de comunicarse e interactuar con el jugador, hacer fotos con ella o actuar como mapa para mostrar el punto exacto en el que el jugador se encuentra.
                        </p>
                </div>
            </div>

            <div className="contenedorMediosRelacionados">
                <div className="contenidoMediosRelacionados">
                    <h2 className="tituloSeccion">Medios relacionados</h2>
                        <hr />
                        <h4 className="tituloMediosRelacionados">Anime</h4>
                        
                        <p className="informacionMediosRelacionados">
                            Las serie y películas de Pokémon, forman un anime metaserial que se basa en la saga de videojuegos (a excepción de Pokémon Yellow). La serie sigue las aventuras de Ash Ketchum y su amigo Brock (hasta la decimocuarta temporada), Ash desea convertirse en un Maestro Pokémon y Brock en el mejor criador y que en compañía de sus amigos viajan alrededor del mundo ficticio de Pokémon. La versión original de la serie se llama Pocket Monsters, o simplemente Pokémon en los países occidentales (a menudo llamado Pokémon: Gotta Catch 'Em All para distinguirlo de las demás temporadas) Ash inicia su primer día de entrenador Pokémon con su primer (y propio) pokémon, llamado Pikachu, a diferencia de los videojuegos en donde el entrenador puede escoger a un Bulbasaur, Charmander, o Squirtle.
                        </p>

                        <p className="informacionMediosRelacionados"></p>

                        <h4 className="tituloMediosRelacionados">Pokemon Trading Card</h4>

                        <p className="informacionMediosRelacionados">
                            Pokémon Trading Card Game es un juego de cartas coleccionables basado de la serie de anime y videojuegos. Los jugadores emplean estrategias y usan las fortalezas y debilidades de sus cartas para derrotar a su oponente por knock out. El juego fue lanzado por primera vez en Norteamérica por Wizards Of The Coast en 1999.Sin embargo, con el lanzamiento de Pokémon Rubí y Zafiro para Game Boy Advance, Wizards Of The Coast perdió la licencia para publicar el juego y Nintendo y Pokémon USA decidieron producir el juego por su cuenta.
                        </p>

                        <h4 className="tituloMediosRelacionados">Manga</h4>

                        <p className="informacionMediosRelacionados">
                            El manga de Pokémon es un conjunto de historias, algunas de las cuales están basadas en los videojuegos, la serie de anime y sus películas.

                            El manga es publicado en Japón por Shōgakukan, en España por Norma Editorial, en Estados Unidos por Viz Media y en Singapur y China por Chuang Yi.
                        </p>

                </div>
            </div>

            <div className="contenedorCriticas">
                <div className="contenidoCriticas">
                    <h2 className="tituloSeccion">Criticas y controversias</h2>
                    <hr />
                        <h4 className="tituloCriticas">Moralidad</h4>
                            <p className="informacionCriticas">
                                Pokémon ha sido criticado por miembros de las religiones cristiana, judía e islámica. Mientras algunos seguimientos de la religión cristiana han acusado a Pokémon de involucrar el ocultismo y la violencia así como el concepto de la "Evolución Pokémon" (que algunos relacionan con la teoría de la evolución) que supuestamente viola el argumento de la creación según el Génesis; por otra parte, en la cadena Sat2000 de la Conferencia Episcopal Italiana se dijo que los videojuegos y las tarjetas de Pokémon están "por completo en la imaginación" y no tienen ningún "efecto secundario moral dañino".Pokémon también ha sido acusado de promover las peleas de gallos y el materialismo.En el 2001, Arabia Saudita prohibió los juegos y cartas de Pokémon, alegando que la franquicia promovió el sionismo en la violación de la doctrina musulmana.57
                            </p>

                        <h4 className="tituloCriticas"> Salud </h4>
                            <p className="informacionCriticas">
                                El 16 de diciembre de 1997 en Japón, 685 niños fueron hospitalizados debido a que fueron víctimas de ataques epilépticos por haber presenciado el episodio de Pokémon Dennō Senshi Porygon (episodio n°38 de la primera temporada en la versión original de la serie). Se había descubierto que el cambio rápido entre los colores rojo y azul en una escena provocó las convulsiones
                            </p>

                            <p className="informacionCriticas">
                                El incidente ocurrido con este episodio fue parodiado en la serie Los Simpson en el episodio "Treinta minutos sobre Tokio" y en la serie South Park en el episodio "Chinpokomon".
                            </p>
                    

                        <h4 className="tituloCriticas"> Monster in My Pocket </h4>
                            <p className="informacionCriticas">
                                En marzo de 2000 Morrison Entertainment Group, una empresa desarrolladora de juguetes con sede en Manhattan Beach (California), demandó a Nintendo, afirmando que los personajes de Pokémon eran "confusamente similares" al juego Monster in My Pocket. Un juez dictaminó que no hubo infracción, por lo que Morrison apeló la sentencia en noviembre de 2001.
                            </p>
                </div>
            </div>

            <div className="contenedorImpactoCultura">
                <div className="contenidoImpactoCultura">
                    <h2 className="tituloSeccion">Impacto en la cultura popular</h2>
                        <hr />
                        <p className="informacionCultura">
                            Pokémon, al convertirse en una franquicia muy conocida, ha dejado su huella en la cultura popular. Los personajes de Pokémon se han convertido en iconos en la sociedad. Como por ejemplo, se han visto 2 globos gigantes de Pikachu en el Desfile del Día de Acción de gracias de Macy's, que se realiza en la ciudad de Nueva York. Se ha visto también un Boeing 747-400 al estilo Pokémon el cual lleva miles de artículos referentes a la franquicia. Se han inaugurado 2 parques de diversiones de Pokémon, uno en Nagoya en el 2005 y otro en Taipéi en el 2006. En el show de Comedy Central, Drawn Together (La casa de los dibujos), un personaje llamado Ling-Ling es una parodia directa de Pikachu. Otras series como ReBoot, Los Simpsons, South Park, The Grim Adventures of Billy & Mandy, y All Grown Up! han hecho varias referencias sobre Pokémon. Pokémon también apareció en la portada de la revista Time en el año 1999.
                        </p>

                        <p className="informacionCultura">
                            En noviembre de 2001 Nintendo abrió una tienda llamada Pokémon Center en el Rockefeller Center de la ciudad de Nueva York, después de los dos otros almacenes de Pokémon en Tokio y Osaka, edificios ficticios donde los entrenadores envían a sus Pokémon para ser curados. La tienda Pokémon tiene un total de dos plantas, con artículos que van desde camisas hasta muñecos de peluche de Pokémon. La tienda también ofreció una "Máquina de Distribución Pokémon" en donde los jugadores colocaban su juego para recibir un huevo de un Pokémon. La tienda también tenía mesas que estaban abiertas para jugadores de Pokémon Trading Card Game en donde entre ellos o un empleado se batían en duelos. El almacén fue cerrado y sustituido por Nintendo World Store el 14 de mayo de 2005
                        </p>

                        <p className="informacionCultura">
                            En verano de 2016, la aplicación para dispositivos móviles, Pokémon GO salió al mercado y revivió el "boom" que la franquicia vivió al inicio del 2000 cuando el videojuego y el anime de este llegaron a todo el mundo. Pokémon GO inició un fenómeno que se volvió viral en las redes y generó un gran aumento en las acciones en bolsa de Game Freak, Niantic y Nintendo. El éxito de la aplicación realzó el nombre de la franquicia y ayudó más tarde al éxito mundial en ventas de los videojuegos para la consola Nintendo 3DS, Pokémon Sol y Luna. 71
                        </p>
                </div>
            </div>


        </div>
    )
}