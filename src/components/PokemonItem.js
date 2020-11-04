// import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PokemonItem = props => {
    
        const {url, name } = props.pokemon;
        const id = url.substring(url.lastIndexOf('/') - 1, url.lastIndexOf('/'));
        return (
            <div className="card" onClick={props.detailPokemon.bind(this, url)}>
                <Link to={`Pokemon/${id}`}>
                    { name }
                </Link>
            </div>
        )
}

// PropTypes
PokemonItem.propTypes = {
    pokemons: PropTypes.object.isRequired
}

export default PokemonItem