// we import React
import React, { useState } from 'react';

// we import any CSS or images we
// want to use
import './App.css';


// we must import our component 
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

// we have a function called App
// remember React components use 
// PascalCasing
function App() {


  // defining our state/categories in App.js
  // we have 'lifted the state' a level
  // we can now pass state into components as 'props'
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // everything between return() is JSX
  // return() is basically like saying
  // document.createElement(JSX)
  return (
    // all this stuff that looks like HTML
    // is called JSX
    <div>
      {/* now we pass our 'props' into JSX components */}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main>
        <Gallery />
        {/* Here we invoke the About component */}
        <About />
      </main>
    </div>
  );
}

export default App;
