import React from 'react';
import List from './composition/List';
import './App.css';

function App(props) {

  
  // create array of card objects
  function buildCardArray(cards){
    
    const cardArray = cards.map((id) => {
      return props.store.allCards[id];
    })
    console.log(cardArray);
    return cardArray;
  }
  
  // create array of List components with required props
  const listArray = props.store.lists.map((list) => {

    return (
      <List header={list.header} key={list.id} cards={buildCardArray(list.cardIds)}/>
    )
  })
  
  return (
    <main className='App'>
      <header className="App-header">
        <h1></h1>
      </header>
      <div className="App-list">
        {listArray}
      </div>

    </main>
  );
}

export default App;
