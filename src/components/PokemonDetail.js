import React, { useState, useEffect } from 'react'
import PokemonAbilities from './PokemonAbilities'
import axios from 'axios';

const PokemonDetail = props => {
    const [state, setState] = useState({ abilities: [] })


    useEffect( () => {
        const url = window.location.pathname;
        const id = url.substring(url.lastIndexOf('/') + 1);
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {setState({abilities: res.data.abilities})
        })
    })

    //   componentDidMount() {
    //     const url = window.location.pathname;
    //     const id = url.substring(url.lastIndexOf('/') + 1);
        
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //     .then(res => {
    //         this.setState({abilities: res.data.abilities})
    //     })
    //   }

        
        return (
            <PokemonAbilities abilities={this.state.abilities}/>
        )
}

export default PokemonDetail;
