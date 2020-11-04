// import React, { Component } from 'react'
import PokemonTypeItem from './PokemonTypeItem';

const PokemonTypes = props => {
        console.log(props.pokemonTypes)
        return props.pokemonTypes.map((pokemonType) =>(
            <PokemonTypeItem pokemonType = {pokemonType} />
        ));
}

export default PokemonTypes;
