
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { ThemeProvider, css } from 'styled-components';


const Div = styled.div`
font-family: Arial, Helvetica, sans-serif;
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
font-weight: bold;
`


const PokemonItem = props => {
    const [pokemonPic, setPokemonPic] = useState([]);

    const {url, name } = props.pokemon;
    const id = url.substring(url.lastIndexOf('/') - 1, url.lastIndexOf('/'));





    useEffect(() => {
        console.log("it starts")
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setPokemonPic({pokemonPic: res.data.sprites.other.["official-artwork"].front_default}))
        console.log(pokemonPic)
        console.log("asd")
      },[])

    return (
        <Link to={`Pokemon/${id}`}>
        {/* <ThemeProvider theme={theme}> */}
            <Div className="card" onClick={props.detailPokemon.bind(this, url)}>
                <p>
                    { name }
                </p>
            </Div>
        {/* </ThemeProvider> */}
        </Link>
    )
}

// PropTypes
PokemonItem.propTypes = {
    pokemons: PropTypes.object.isRequired
}

export default PokemonItem