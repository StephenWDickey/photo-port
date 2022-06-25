import React from 'react'


// import helper function
import { capitalizeFirstLetter } from '../../utils/helpers';


// import photo/image to display in gallery
import photo from "../../assets/small/commercial/0.jpg";


function Gallery(props) {

    // create an object to store name and description values
    const currentCategory = {
        name: "commercial",
        description: "Photos of grocery stores, food trucks, and other commercial projects",
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p> 
            <div className="flex-row">
                {/* img element must have alt value or React,
                will fire off an error for poor accessibility */}
                <img src={photo} alt="Commercial Example" className="img-thumbnail mx-1" />
            </div>       
        </section>
    );
}

export default Gallery;