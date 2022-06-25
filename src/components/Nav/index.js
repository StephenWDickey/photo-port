// to re-render component we must use state 
// we have to import useState function from React
// we 'lifted state a level' so we dont need to import
// useEffect is a Hook like useState
// except it monitors components and how they are 
// added to and removed from the DOM
import React, { useEffect } from 'react';

// import helper function
import { capitalizeFirstLetter } from "../../utils/helpers";


// pass in props to function
function Nav(props) {


  // // made an array with different objects
  // const categories = [
  //   {
  //     name: "commercial",
  //     description:
  //       "Photos of grocery stores, food trucks, and other commercial projects",
  //   },
  //   { name: "portraits", description: "Portraits of people in my life" },
  //   { name: "food", description: "Delicious delicacies" },
  //   {
  //     name: "landscape",
  //     description: "Fields, farmhouses, waterfalls, and the beauty of nature",
  //   },
  // ];

  // // define event listener function
  // function categorySelected(name) {
  //   // use temperate literal to pass name variable in
  //   // now it will console log whatever argument it takes
  //   console.log(`${name} clicked`)
  // };

  // return (
  //   <header>
  //     <h2>
  //       {/* use of data-testid attributes to identify elements,
  //       we want separation of concerns */}
  //       <a data-testid="link" href="/">
  //         <span role="img" aria-label="camera"> 📸</span> Oh Snap!
  //       </a>
  //     </h2>
  //     <nav>
  //       <ul className="flex-row">
  //         <li className="mx-2">
  //           {/* use of data-testid attributes to identify elements,
  //           we want separation of concerns */}
  //           <a data-testid="about" href="#about">
  //           About me
  //           </a>
  //         </li>
  //         <li>
  //           <span>Contact</span>
  //         </li>
  //         {/* we take our array we created and map it to 
  //         different <li> */}
  //         { categories.map((category) => (
  //           // there is a key attribute on this <li>
  //           // whenever we use the .map method on something in JSX
  //           // we must have a key attribute so it is unique
  //           // helps keep track of things in virtual DOM
  //           // we made the key category.name because they will be unique
  //           // typically the key might be some sort of id
  //           <li className="mx-1" key={category.name}>
  //             {/* here we are adding an event listener using onClick 
  //             method, it runs a function called categorySelected 
  //             we make an anonymous function onClick, it passes
  //             category.name as argument to categorySelected*/}
  //             <span onClick={ () => categorySelected(category.name)}>
  //               {category.name}
  //             </span>
  //           </li>
  //         ))}
  //       </ul>
  //     </nav>
  //   </header>
  // );

  // here is the classic Hook format
  // a value/state then a setter function
  // our 'initial state' will be the first object
  // in our categories array
  // const [currentCategory, setCurrentCategory] = useState(categories[0]);
  


  // destructure our props so we can use them
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  // invoke useEffect hook to change title
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  // this second argument says, re-render the component
  // if this state changes value
  }, [currentCategory]);

    return (
      <header className="flex-row px-1">
        <h2>
          <a data-testid="link" href="/">
            <span role="img" aria-label="camera">
              {" "}
              📸
            </span>{" "}
            Oh Snap!
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a data-testid="about"
                href="#about"
                onClick={() => setContactSelected(false)}
              >
                About me
              </a>
            </li>
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
              <span onClick={() => 
                setContactSelected(true)
              }>Contact</span>
            </li>
            {categories.map((category) => (
              // notice how we insert variables within
              // the curly bracket javascript
              <li className={`mx-1 ${
                  // the name of the current state
                  currentCategory.name === category.name && !contactSelected && 'navActive'
                  }`} key={category.name}>
                <span
                  // our setter hook function gets triggered
                  // notice it accepts an argument of state
                  onClick={() => {
                    setCurrentCategory(category);
                    setContactSelected(false);
                  }}
                >
                  {/* helper function reformats how to name is printed */}
                  {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  
}

export default Nav;