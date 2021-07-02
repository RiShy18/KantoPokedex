import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import './styles/App.css';



class App extends Component {
  constructor(){
    super();
    this.state={
      pokemon:{}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id){
    const fetchPokemon = "https://pokeapi.co/api/v2/pokemon/";
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then (data => {
        const pokemon = new Pokemon(data);

        this.setState({pokemon});
        console.log(pokemon)
      })
      .catch(err => console.log(err));
    console.log(id);
  }

  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick}/>
        <DetailView pokemon={this.state.pokemon}></DetailView>
      </div>
    );
  }
}


export default App;