import React from 'react';
import '../css/About.css';
import fitpet from '../imgs/fitpet_logo.png';
import mbi from '../imgs/mbi_logo.png';
import iwt from '../imgs/iwt_logo.png';

function About() {

  const data = {
    title: 'About Me',
    description: `성장에 가치를 두는 사람으로 밝고 맑은 것들을 좋아합니다.
    가치로운 일에는 멘땅의 헤딩도 서슴지 않아 사서고생이라는 호를 가지고 있습니다.
    행동력, 통찰력, 끈기력을 가지고 있으며, 지구력을 키워내는 중입니다.
    사용자가 서비스를 적극적으로 이용할 수 있는 서비스를 만들기 위해
    고민하는 개발자입니다.
    사용자 편의성을 높이는 UI/UX와 사용자가 입력한 데이터를 효과적으로
    수집할 수 있는 화면을 좋은 코드로 작성하기 위해 매일 2시간 이상 개발
    공부를 하고 있습니다.`,
    major: [
      {
        title: 'Front-end',
        icon: 'fab fa-js-square',
        description: ["HTML5", "CSS3", "Javascript"]
      },
      {
        title: 'Back-end',
        icon: 'fab fa-java',
        description: ["Java", "nodejs"]
      },
      {
        title: 'Marketing',
        icon: 'fab fa-google',
        description: ["google Analytics, Tag Manager"]
      },
      {
        title: 'Front-end',
        icon: 'fab fa-js-square',
        description: ["HTML5", "Javascript"]
      },
      {
        title: 'Back-end',
        icon: 'fab fa-java',
        description: ["Java", "nodejs"]
      }
    ]

  };

  const { title, description, major } = data;

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
        ))};
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


