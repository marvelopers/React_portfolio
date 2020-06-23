import React from 'react';
import styled from "styled-components";
import AboutMajor from './AboutMajor';

import { useSelector } from 'react-redux';
import { getProfileData } from "../../store/store";


export function About(props) {

  const storeData = useSelector(getProfileData);
  const aboutData = storeData.aboutData;

  //store

  return (

    < SectionAbout id="about" className="section section__container" >
      <h1 className="about__title">{aboutData.title}</h1>
      <p>{aboutData.description}</p>
      <AboutMajor></AboutMajor>
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
  justify-content : center;
  text-align : center;
  border : 1px solid black;
  /* background-color : black; */
  .about__jobs{
    text-align : left;
  }
`;

export default About;