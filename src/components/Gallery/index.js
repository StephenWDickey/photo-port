import React from 'react'


// import helper function
import { capitalizeFirstLetter } from '../../utils/helpers';


import PhotoList from '../PhotoList';

// destructure props to obtain currentCategory state data
function Gallery(props) {

    // create an object to store name and description values
    // we are destructuring the props argument to
    // obtain currentCategory state info
    const { currentCategory } = props;

    return (
        <section>
            {/* incorporate data-testid attribute */}
            <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
             {/* pass through the prop info as argument */}
            <PhotoList category={currentCategory.name}/>      
        </section>
    );
}

export default Gallery;