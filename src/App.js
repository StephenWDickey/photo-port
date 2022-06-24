// we import React
import React from 'react';

// we import any CSS or images we
// want to use
import './App.css';


// we must import our component 
import About from './components/About';


// we have a function called App
// remember React components use 
// PascalCasing
function App() {
  // everything between return() is JSX
  // return() is basically like saying
  // document.createElement(JSX)
  return (
    // all this stuff that looks like HTML
    // is called JSX
    <div>
      <main>
        {/* Here we invoke the About component */}
        <About />
      </main>
    </div>
  );
}

export default App;
