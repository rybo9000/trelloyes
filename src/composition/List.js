import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
    
    const cardArray = props.cards.map((card) => {
        return (
            <Card title={card.title} cardKey={card.id} content={card.content} onDelete={props.onDelete}></Card>
        )
    })
    return (
        <section className="List">
            <header className="List-header">
                {props.header}
            </header>
            <div className="List-cards">
                {cardArray}
                <button type="button" class="List-add-button" onClick={() => props.addRandom(props.listKey)}>
              + Add Random Card
            </button>
            </div>

        </section>
    )
}

export default List;