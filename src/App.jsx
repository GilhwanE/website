import './app.scss';

import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Parallax from './components/parallax/Parallax';

const App = () => {
  return (
    <>
      <section id="Home">
        <Navbar />
        <Home />
      </section>
      <section id="Content">
        {/* type="" type={} prop을 전달하는 두가지 방식 중 prop의 값을 고정적으로 사용하기 위해서 첫번째 코드를 사용함 */}
        <Parallax type="content" />
      </section>
      <section>Content</section>
      <section id="Work">
        <Parallax type="work" />
      </section>
      <section>Work1</section>
      <section>Work2</section>
      <section>Work3</section>
      <section id="About">About</section>
    </>
  );
};
export default App;
