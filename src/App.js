import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Pokemons from './components/Pokemons';
import Header from './components/layout/Header';
import Types from './components/pages/Types';
import axios from 'axios';
import PokemonDetail from './components/PokemonDetail';
import styled, { ThemeProvider, css } from 'styled-components';



const Div = styled.div`

font-family: sans-serif;
/* background-image: url('https://www.designbolts.com/wp-content/uploads/2012/12/Skeletal-Weave-White-Tileable-pattern-for-website-background.jpg'); */
display: flex;
align-items: center;
justify-content: center;
`;


const backgroundStyle = {
  
  // backgroundImage: "url('https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F04%2Fpokemon-pikachu-video-chat-backgrounds-download-info-006.jpg?quality=95&w=1170&cbr=1&q=90&fit=max')",
  // backgroundImage: "url('https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png')",
  // opacity: "0.5",

  color: "#fff",
}



const App = props => {
  const [state, setState] = useState({ pokemons: [] });
  const [ids, setIds] = useState({ ids: []})


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => setState({pokemons: res.data.results}))

  }, []);



  const detailPokemon = (url) => {
    // It doesn't do anything however it is needed 
    // because I binding in PokemonItem just for science :D
    console.log(url)
  }

    return (
      <Router>
      <div style = {backgroundStyle} className="App">
        <Header />
        <div className="row">
        <Div className="container">
        <Route exact path="/Pokemons" render={props => (
          <Pokemons pokemons={state.pokemons}  
          detailPokemon={detailPokemon}/>
        )} />

        <Route path="/types" component={Types} />
        <Route path="/Pokemon" component={PokemonDetail} />
        </Div>
        </div>
        

      </div>
      </Router>
    );
}

export default App;
