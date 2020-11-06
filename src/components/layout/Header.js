import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
    return (
        <Div>
        <header >
            <h1>PokemonList</h1>
            <Link style={linkStyle} to="/Pokemons">Pokemons</Link> | <Link style={linkStyle} to="/types">Types</Link>
        </header>
        </Div>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
const Div = styled.div`
    background-image: url('https://coverfiles.alphacoders.com/501/50183.jpg');
    /* background: #333; */
    font-family: Arial, Helvetica, sans-serif;
    color: yellow;
    text-align: left;
    padding: 216px;

`;


