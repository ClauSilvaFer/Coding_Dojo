import axios from 'axios';
import { useState } from 'react';

export const CallApiAxios = (props) => {

    const [pokemones, setPokemones] = useState([]);

    const llamarApi = async () =>{
        var response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
        var lista = response.data.results;

        setPokemones(lista);

    }

    return (
        <div class="estilo">
            <button onClick={llamarApi}>Fetch Pokemon </button>

            {
                pokemones.map((item, index) => {
                    return <p>{item.name}</p>
                })
            }

        </div>
    );
};