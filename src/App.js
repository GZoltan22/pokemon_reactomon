import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Pokemons from './components/Pokemons';
import Header from './components/layout/Header';
import Types from './components/pages/Types';
import axios from 'axios';
import PokemonDetail from './components/PokemonDetail';

class App extends Component {
  state = {
    pokemons: []
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => this.setState({pokemons: res.data.results}))
  }

  detailPokemon = (url) => {
    // TODO i need help:(
    console.log(url)
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <div className="row">
        <div className="container">
        <Route exact path="/Pokemons" render={props => (
          <React.Fragment>
            <Pokemons pokemons={this.state.pokemons}  detailPokemon={this.detailPokemon}/>
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
}

export default App;
