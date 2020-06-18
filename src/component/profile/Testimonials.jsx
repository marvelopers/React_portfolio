import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { useSelector } from "react-redux";
import { getProfileData } from "../../store/store";


function Testimonals(props) {

  const storeData = useSelector(getProfileData);
  const testimonials = storeData.speech.testimonials;

  return (
    <SectionAbout id="testimonals" className="section">
      <div className="section__container">
        <h1>Testimonials</h1>
        <h3>See what they say about me</h3>
        <div className="testimonials">
          {testimonials.map(t => (
            <div className="testimonial">
              <img src={t.img} alt="profile" className="testimonial__avatar" />
              <div className="testimonial__speech-bubble">
                <p>{t.speech}</p>
                <p className="name">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionAbout>
  );
}

/////////////style/////////////
const SectionAbout = styled.section`
  border : 1px solid black;
  /* background-color : black; */


`;
export default Testimonals;