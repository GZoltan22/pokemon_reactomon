import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class PokemonItem extends Component {

    render() {
        const {url, name } = this.props.pokemon;
        return (
            <div className="card" onClick={this.props.detailPokemon.bind(this, url)}>
                <p>
                    { name }
                </p>
            </div>
        )
    }
}

// PropTypes
PokemonItem.propTypes = {
    pokemons: PropTypes.object.isRequired
}