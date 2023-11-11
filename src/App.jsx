import './app.scss';

import React from 'react';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Content</section>
      <section>Parallax</section>
      <section>Work1</section>
      <section>Work2</section>
      <section>Work3</section>
    </>
  );
};
export default App;
