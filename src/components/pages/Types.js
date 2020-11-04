import React, { Component } from 'react'
import PokemonTypes from "./PokemonTypes"
import axios from 'axios';

export default class Types extends Component {
    state = {
        pokemonTypes: []
      }

      componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/type')
        .then(res => this.setState({pokemonTypes: res.data.results}))
      }
    

    render() {
        return (
            <div className="container">
                <PokemonTypes pokemonTypes = {this.state.pokemonTypes} />
            </div>
        )
    }
}

