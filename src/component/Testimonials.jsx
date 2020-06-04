import React from 'react';
import '../css/Testimonials.css';
import jsh from "../imgs/jsh.jpeg";
import kyj from "../imgs/kyj.jpeg";

function Testimonials(props) {

  const { testimonials } = props.speech;

  return (
    <section id="testimonals" class="section">
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
          ))};
        </div>
      </div>
    </section>);
}

export default Testimonials;