import './app.scss';

import React from 'react';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <>
      <section id="Home">
        <Navbar />
      </section>
      <section id="Content">Parallax</section>
      <section>Content</section>
      <section id="Work">Parallax</section>
      <section>Work1</section>
      <section>Work2</section>
      <section>Work3</section>
      <section id="About">About</section>
    </>
  );
};
export default App;
