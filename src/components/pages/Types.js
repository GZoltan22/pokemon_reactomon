import React, { useState, useEffect } from 'react'
import PokemonTypes from "./PokemonTypes"
import axios from 'axios';

const Types = props => {
    const [state, setState] = useState({ pokemonTypes: [] })


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type')
        .then(res => setState({pokemonTypes: res.data.results}))

    })

    //   componentDidMount() {
    //     axios.get('https://pokeapi.co/api/v2/type')
    //     .then(res => this.setState({pokemonTypes: res.data.results}))
    //   }
    
        return (
            <div className="container">
                <PokemonTypes pokemonTypes = {state.pokemonTypes} />
            </div>
        )
}

export default Types;

