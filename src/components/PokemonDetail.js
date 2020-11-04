import React, { Component } from 'react'
import PokemonAbilities from './PokemonAbilities'
import axios from 'axios';

export default class PokemonDetail extends Component {
    state = {
        abilities: []
      }

      componentDidMount() {
        const url = window.location.pathname;
        const id = url.substring(url.lastIndexOf('/') + 1);
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
            this.setState({abilities: res.data.abilities})
        })
      }

    render() {
        
        return (
            <PokemonAbilities abilities={this.state.abilities}/>
        )
    }
}
