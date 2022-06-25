import React from 'react';

function Nav() {


  // made an array with different objects
  const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  // define event listener function
  function categorySelected(name) {
    // use temperate literal to pass name variable in
    // now it will console log whatever argument it takes
    console.log(`${name} clicked`)
  };

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
            About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {/* we take our array we created and map it to 
          different <li> */}
          { categories.map((category) => (
            // there is a key attribute on this <li>
            // whenever we use the .map method on something in JSX
            // we must have a key attribute so it is unique
            // helps keep track of things in virtual DOM
            // we made the key category.name because they will be unique
            // typically the key might be some sort of id
            <li className="mx-1" key={category.name}>
              {/* here we are adding an event listener using onClick 
              method, it runs a function called categorySelected 
              we make an anonymous function onClick, it passes
              category.name as argument to categorySelected*/}
              <span onClick={ () => categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;