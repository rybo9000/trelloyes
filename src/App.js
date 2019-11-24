import React from 'react';
import List from './composition/List';
import './App.css';
import STORE from './store';

class App extends React.Component{

  state = {
    store: STORE
  }
  
  onDelete = (item) => {
    
    

    console.log("delete clicked", item)
  }

  addRandom = (item) => {
    console.log("added random", item)
  }
  
  // create array of card objects
  buildCardArray = (cards) => {
    
    const cardArray = cards.map((id) => {
      return this.state.store.allCards[id];
    })

    return cardArray;
  }
  
  // create array of List components with required props
  listArray = () => {

    return this.state.store.lists.map((list) => {
    
      return (
      <List header={list.header} listKey={list.id} cards={this.buildCardArray(list.cardIds)} onDelete={this.onDelete} addRandom={this.addRandom}/>
    )
    })
  }
  
  render() {
  
    return (
      <main className='App'>
        <header className="App-header">
          <h1></h1>
        </header>
        <div className="App-list">
          {this.listArray()}
        </div>

      </main>
    )
  }
}


export default App;
