import React from 'react';

import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    // for JSX we use className instead of class
    // since class is already a keyword in JavaScript
    <section className='my-5'>
      <h1 id="about">Who am I?</h1>
      {/* In JSX we use curly brackets {} for javascript */}
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;