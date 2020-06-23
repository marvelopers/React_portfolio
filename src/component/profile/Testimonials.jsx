import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { useSelector } from "react-redux";
import { getProfileData } from "../../store/store";

export function Testimonials(props) {

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
  background-color : #f3f6d4;
  display : flex;
  text-align : center;
  .testimonial__avatar{
    border-radius : 29%;
    width : 250px;
  }
  .testimonial__speech-bubble{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: var(--color-white);
    border-radius: var(--size-border-radius);
  }
`;
export default Testimonials;