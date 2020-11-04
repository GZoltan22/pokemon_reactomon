import React, { Component } from 'react';
import PokemonItem from './PokemonItem';

import PropTypes from 'prop-types';

export default class Pokemons extends Component {
    render() {
        return (
            this.props.pokemons.map((pokemon) => (
            <PokemonItem pokemon={pokemon}
            detailPokemon = {this.props.detailPokemon} />
            ))
        )
    }
}

// PropTypes
Pokemons.propTypes = {
    pokemons: PropTypes.array.isRequired
}
