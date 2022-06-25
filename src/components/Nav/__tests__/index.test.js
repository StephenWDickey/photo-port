import React from 'react';

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Nav from '../../Nav';


// declare props to use in test
const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]

// mock functions
const mockCurrentCategory = jest.fn();

const mockSetCurrentCategory = jest.fn();


afterEach(cleanup);

describe('Nav component', () => {

    // render the Nav component
    test('renders', () => {
        // pass in props to Nav component
        render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
    });

    test('matches snapshot', () => {
        const { asFragment } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />);
        expect(asFragment()).toMatchSnapshot();
    });
});


// we will create a test for emoji visibility
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        
        // we will identify JSX element by its label
        const { getByLabelText } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})


// make sure navbar list items are populated with data
describe('links are visible', () => {
    it('inserts text into the links', () => {
        // identify JSX elements via data-testid attributes
        const { getByTestId } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />);
        // getByTestId method with toHaveTextContent matcher
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})