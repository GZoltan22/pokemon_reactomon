import React, { Component } from 'react'

export default class PokemonAbilities extends Component {
    render() {
        return (this.props.abilities.map(ability => (
        <li>{ability.ability.name}</li>
        ))
        )
    }
}
