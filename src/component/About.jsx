import React from 'react';
import '../css/About.css';
import fitpet from '../imgs/fitpet_logo.png';
import mbi from '../imgs/mbi_logo.png';
import iwt from '../imgs/iwt_logo.png';

function About(props) {

  const { title, description, major } = props.aboutData;

  return (
    <section id="about" class="section section__container">

      <h1 class="about__title">{title}</h1>
      <p>{description}</p>

      <div class="about__majors">

        {major.map(m => (
          <div class="major">
            <div class="major__icon">
              <i class={m.icon}></i>
            </div>
            <h2 class="major__title">{m.title}</h2>
            <div class="major__description">
              {m.description.join(',')}
            </div>
          </div>
        ))}
      </div>

      <div class="about__jobs">
        <div class="job">
          <img src={fitpet} alt="fitpet__logo" class="job__logo" />
          <div class="job__description">
            <p class="job__name">핏펫</p>
            <p class="job__period">2020.01 ~ 현재</p>
          </div>
        </div>
        <div class="job">
          <img src={mbi} alt="mbi__logo" class="job__logo" />
          <div class="job__description">
            <p class="job__name">MBI솔루션</p>
            <p class="job__period">2018.8 ~ 2020.01</p>
          </div>
        </div>
        <div class="job">
          <img src={iwt} alt="iwt__logo" class="job__logo" />
          <div class="job__description">
            <p class="job__name">아이원 트래블</p>
            <p class="job__period">2016.11 ~ 2018.01</p>
          </div>
        </div>
      </div>
    </section>);
}

export default About;


