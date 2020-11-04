import React, { Component } from 'react'

export default class PokemonTypeItem extends Component {
    render() {
        return (
            <div className="card">
                <p>{ this.props.pokemonType.name }</p>
            </div>
        )
    }
}
