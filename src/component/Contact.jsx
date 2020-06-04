import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <section id="contact" class="section">
      <h1 class="contact__title">contact</h1>
      <h2 class="contact__email">briller015@gmail.com</h2>
      <h2 class="contact__phone">
        <i class="fas fa-phone"></i> 010-8860-5035</h2>
      <div class="contact__links">
        <a href="https://github.com/briller8" target="_blank">
          <i class="fab fa-github-square"></i>
        </a>
        <a href="https://blog.naver.com/PostList.nhn?blogId=brilliant0115&from=postList&categoryNo=20"
          target="__blank">
          <i class="fab fa-blogger"></i>
        </a>

      </div>
      <button class="arrow-up">
        <i class="fas fa-arrow-circle-up"></i>
      </button>
    </section>
  );
}

export default Contact;