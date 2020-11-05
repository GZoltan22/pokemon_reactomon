import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Pokemons from './components/Pokemons';
import Header from './components/layout/Header';
import Types from './components/pages/Types';
import axios from 'axios';
import PokemonDetail from './components/PokemonDetail';

const App = props => {
  const [state, setState] = useState({ pokemons: [] });



  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => setState({pokemons: res.data.results}))

  }, []);



  const detailPokemon = (url) => {
    // It doesn't do anything however it is needed 
    // because i binding in PokemonItem just for science :D
    console.log(url)
  }


    return (
      <Router>
      <div className="App">
        <Header />
        <div className="row">
        <div className="container">
        <Route exact path="/Pokemons" render={props => (
          <React.Fragment>
            <Pokemons pokemons={state.pokemons}  
            detailPokemon={detailPokemon}
            />
          </React.Fragment>
        )} />
        <Route path="/types" component={Types} />
        </div>
        </div>
        <Route path="/Pokemon" component={PokemonDetail} />
      </div>
      </Router>
    );
}

export default App;
