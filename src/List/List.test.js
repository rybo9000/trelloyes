import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List Component Tests', () => {
    it('Renders Without Crashing', () => {
        const testDiv = document.createElement('div');
        ReactDOM.render(<List />, testDiv);
        ReactDOM.unmountComponentAtNode(testDiv);
    })

    it('Renders As Expected', () => {
        const tree = renderer.create(<List />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})