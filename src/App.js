import React from 'react';
import './App.css';
import List from './List/List';

class App extends React.Component{
  
  render() {
  
    const listArray = this.props.store.lists.map((list) => {
      return <List header={list.header} key={list.id} cards={list.cardIds}/>
    })
    
    return (
      <main className='App'>
        <header>
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {listArray}
        </div>
        <div />

      </main>
    )
  }
}


export default App;
