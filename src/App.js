import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList';
import Form from './components/Form';

class App extends Component {
  state={
    cards: []
  };
  addCard = (cardInfo) =>{
  console.log(cardInfo);
    this.setState(prevState =>({
      cards: prevState.cards.concat(cardInfo)
    }))

  };
  render() {
    return (
      <div >
        <header >

          <h1>Hello hiq</h1>
        </header>
        <Form onSubmit={this.addCard}/>
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
