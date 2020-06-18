import React from 'react';
import '../css/Contact.css';

export function Contact() {
  return (
    <SectionAbout id="contact" className="section">
      <h1 className="contact__title">contact</h1>
      <h2 className="contact__email">briller015@gmail.com</h2>
      <h2 className="contact__phone">
        <i className="fas fa-phone"></i> 010-8860-5035</h2>
      <div className="contact__links">
        <a href="https://github.com/briller8" target="_blank">
          <i className="fab fa-github-square"></i>
        </a>
        <a href="https://blog.naver.com/PostList.nhn?blogId=brilliant0115&from=postList&categoryNo=20"
          target="__blank">
          <i className="fab fa-blogger"></i>
        </a>

      </div>
      <button className="arrow-up">
        <i className="fas fa-arrow-circle-up"></i>
      </button>
    </SectionAbout>
  )
}

/////////////style/////////////
const SectionAbout = styled.section`
  border : 1px solid black;
  /* background-color : black; */
`;

export default Contact;