import React from 'react';
import '../css/Home.css';
import ksh from '../imgs/ksh.jpeg';

function Home(props) {

  const { title, description, description2 } = props.homeData;

  return (


    <section id="Home">
      <div class="home__container">
        <img src={ksh} alt="김서현" class="home__avatar" />
        <h1 class="home__title">
          {title}<br />
        </h1>
        <h2 class="home__description">
          {description}<br /><br />
        </h2>
        <h3 class="home__description">
          {description2}
        </h3>
      </div>
    </section>
  );
}

export default Home;

