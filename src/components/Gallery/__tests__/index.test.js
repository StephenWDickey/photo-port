import React from 'react';

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Gallery from '../../Gallery';


// create a prop for the test
const portrait = { name: "portraits", description: "Portraits of people in my life" };

// wipe data after each test is run
afterEach(cleanup)


// the test will check for rendering of Gallery component
describe('Gallery is rendering', () => {

    it('renders', () => {
        // pass prop into Gallery component
        render(<Gallery currentCategory={portrait} />);
    });

    it('matches snapshot', () => {
        
        const { asFragment } = render(<Gallery currentCategory={portrait} /> )
        // we create the snapshot with asFragment
        // then check if it matches
        expect(asFragment()).toMatchSnapshot()
    });

    it('renders', () => {
        const { getByTestId } = render(<Gallery currentCategory={portrait} />)
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
    });
})

