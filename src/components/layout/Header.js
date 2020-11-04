import React from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>PokemonList</h1>
            <Link style={linkStyle} to="/Pokemons">Pokemons</Link> | <Link style={linkStyle} to="/types">Types</Link>
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '15px'
}