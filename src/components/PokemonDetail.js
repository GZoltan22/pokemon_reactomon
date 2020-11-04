import React, { Component } from 'react'
import axios from 'axios';

export default class PokemonDetail extends Component {
    state = {
        pokemonDetail: []
      }

      
    render() {
        return (
            <div>
                {this.props.PokemonDetail}
            </div>
        )
    }
}
