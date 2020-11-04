import React, { Component } from 'react'
import PokemonTypeItem from './PokemonTypeItem';

export default class PokemonTypes extends Component {
    render() {
        console.log(this.props.pokemonTypes)
        return this.props.pokemonTypes.map((pokemonType) =>(
            <PokemonTypeItem pokemonType = {pokemonType} />
        ));

    }
}
