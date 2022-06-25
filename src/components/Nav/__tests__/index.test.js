import React from 'react';

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Nav from '../../Nav';


afterEach(cleanup);

describe('Nav component', () => {

    // render the Nav component
    test('renders', () => {
        render(<Nav />);
    });

    test('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });
});


// we will create a test for emoji visibility
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        
        // we will identify JSX element by its label
        const { getByLabelText } = render(<Nav />);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})


// make sure navbar list items are populated with data
describe('links are visible', () => {
    it('inserts text into the links', () => {
        // identify JSX elements via data-testid attributes
        const { getByTestId } = render(<Nav />);
        // getByTestId method with toHaveTextContent matcher
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})