// import React, { Component } from 'react';
import PokemonItem from './PokemonItem';

import PropTypes from 'prop-types';

const Pokemons = props => {
        return (
            props.pokemons.map((pokemon) => (
            <PokemonItem pokemon={pokemon}
            detailPokemon = {props.detailPokemon} />
            ))
        )
}

// PropTypes
Pokemons.propTypes = {
    pokemons: PropTypes.array.isRequired
}

export default Pokemons;
