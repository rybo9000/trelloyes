import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
    
    const cardArray = props.cards.map((card) => {
        return (
            <Card title={card.title} key={card.id} content={card.content}></Card>
        )
    })
    
    console.log(props.cards);
    
    return (
        <section className="List">
            <header className="List-header">
                {props.header}
            </header>
            <div className="List-cards">
                {cardArray}
            </div>
        </section>
    )
}

export default List;