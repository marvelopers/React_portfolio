import React from 'react';
import styled from "styled-components";
import AboutMajor from './AboutMajor';

import { store } from "./store/store";

function About(props) {

  // console.log('aboutData', props.aboutData);
  const { title, description, major } = props.aboutData;

  //store

  const store = createStore(reducer);
  console.log("store===>", store.getState());

  const listener = () => {
    const state = store.getState();
    console.log(state);
  };

  const unsubscribe = store.subscribe(listener);

  return (

    < SectionAbout id="about" className="section section__container" >
      <h1 className="about__title">{title}</h1>
      <p>{description}</p>
      <AboutMajor majorData={major}></AboutMajor>
      <div className="about__jobs">
        <div className="job">
          {/* <img src={fitpet} alt="fitpet__logo" className="job__logo" /> */}
          <div className="job__description">
            <p className="job__name">핏펫</p>
            <p className="job__period">2020.01 ~ 현재</p>
          </div>
        </div>
        <div className="job">
          {/* <img src={mbi} alt="mbi__logo" className="job__logo" /> */}
          <div className="job__description">
            <p className="job__name">MBI솔루션</p>
            <p className="job__period">2018.8 ~ 2020.01</p>
          </div>
        </div>
        <div className="job">
          {/* <img src={iwt} alt="iwt__logo" className="job__logo" /> */}
          <div className="job__description">
            <p className="job__name">아이원 트래블</p>
            <p className="job__period">2016.11 ~ 2018.01</p>
          </div>
        </div>
      </div>
    </SectionAbout >
  );
}

const SectionAbout = styled.section`
  border : 1px solid black;
  /* background-color : black; */
`;

export default About;