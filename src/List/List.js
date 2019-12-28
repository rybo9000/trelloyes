import React from 'react';
import Card from '../Card/Card';

class List extends React.Component {
    render() {
        
        const cardArray = this.props.cards.map((card) => {
            return <Card title={card.title} content={card.content} key={card.id}/>
        })
        
        return (
            <section className="List">
                <header>{this.props.header}</header>
                <div className="List-cards">
                    {cardArray}
                </div>
            </section>
        )
    }
}

export default List;