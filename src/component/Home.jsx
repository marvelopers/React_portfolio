import React from 'react';
import '../css/Home.css';
import ksh from '../imgs/ksh.jpeg';

function Home() {

  const data = {
    title: 'MarVeloper',
    description: 'Developer with Marketer.',
    description2: `나의 일이 세상에 긍정적인 영향을 주는 일이 되기를 바랍니다.
    세상을 이롭게하는 마케팅을 사랑했으나, 보다 근본적으로 세상을 이롭게할 수 있는 개발을 만났습니다.
    지금은 개발에 모든 에너지를 쏟고 있습니다. :)`
  }

  const { title, description, description2 } = data;


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

