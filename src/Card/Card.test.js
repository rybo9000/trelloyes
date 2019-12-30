import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card Component Tests', () => {
    it('Renders Without Crashing', () => {
        const testDiv = document.createElement('div');
        ReactDOM.render(<Card />, testDiv);
        ReactDOM.unmountComponentAtNode(testDiv);
    })

    it('Renders As Expected', () => {
        const tree = renderer.create(<Card />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})