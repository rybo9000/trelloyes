import React from 'react';
import Card from '../Card/Card';
import './List.css';

class List extends React.Component {
    render() {
        
        const cardArray = this.props.cards.map((card) => {
            return <Card title={card.title} content={card.content} key={card.id}/>
        })
        
        return (
            <section className="List">
                <header className="List-header"><h2>{this.props.header}</h2></header>
                <div className="List-cards">
                    {cardArray}
                </div>
            </section>
        )
    }
}

export default List;