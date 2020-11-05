import React, { useState, useEffect } from 'react'
import PokemonAbilities from './PokemonAbilities'
import axios from 'axios';

const PokemonDetail = props => {
    const [state, setState] = useState({ abilities: [] })


    useEffect( () => {
        const url = window.location.pathname;
        const id = url.substring(url.lastIndexOf('/') + 1);
        //TODO if pokemons has 10 or bigger number
        //it takes just the second num like 0 because of the
        //bad string manipulation above (id)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {setState({abilities: res.data.abilities})
        })
    }, [])

        
        return (
            <PokemonAbilities abilities={state.abilities}/>
        )
}

export default PokemonDetail;
