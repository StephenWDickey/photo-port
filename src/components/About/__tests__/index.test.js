import React from 'react';

// import functions from React Testing Library
import { render, cleanup } from '@testing-library/react';

// import jest-dom functionality
import '@testing-library/jest-dom/extend-expect';

// import the component we are testing
import About from '../../About';


// this utility will clean data between tests
afterEach(cleanup);


// jest creates another virtual DOM for resting


// the describe function will declare what we are testing
// we are testing the About component
describe('About component', () => {
    
    // first test checks if component renders
    // we could also write test instead it
    it('renders', () => {
        render(<About />);
    });


    // second test is a snapshot
    // will be a 'test case'
    it('matches snapshot DOM node structure', () => {
        // asFragment function returns a snapshot
        const { asFragment } = render(<About />);
        // expect function with matcher
        // the matcher is toMatchSnapshot()
        expect(asFragment()).toMatchSnapshot();
    });


})
