import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { useSelector } from "react-redux";
import { getProfileData } from "../../store/store";


function Testimonals(props) {

  const storeData = useSelector(getProfileData);
  const testimonials = storeData.speech.testimonials;

  return (
    <SectionAbout id="testimonals" class="section">
      <div class="section__container">
        <h1>Testimonials</h1>
        <h3>See what they say about me</h3>
        <div class="testimonials">
          {testimonials.map(t => (
            <div class="testimonial">
              <img src={t.img} alt="profile" class="testimonial__avatar" />
              <div class="testimonial__speech-bubble">
                <p>{t.speech}</p>
                <p class="name">{t.name}</p>
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