import React from 'react';
import '../css/Work.css';


import board from '../imgs/board.jpeg';
import nodeSt from '../imgs/nodeSt.jpeg';
import happy from '../imgs/happy.jpeg';
import dataR from '../imgs/dataR.jpeg';
import iwt from '../imgs/iwt.jpeg';


function Work() {
  return (
    <section id="work" class="section">
      <div class="" section__container>
        <h1>My Work</h1>
        <h3>Projects</h3>
        <div class="work__categories">
          <button data-filter="All" class="category__btn selected">
            All<span class="category__count">5</span>
          </button>
          <button data-filter="Developer" class="category__btn">
            Developer<span class="category__count">3</span>
          </button>
          <button data-filter="Marketer" class="category__btn">
            Marketer<span class="category__count">2</span>
          </button>
        </div>

        <div class="work__projects">
          <a data-type="Developer" href="#p1" class="project" target="blank" id="p1">
            <img src={board} alt="project1" class="project__img" />
            <div class="project__description">
              <h3>[웹 프로그래밍 Java]</h3>
              <ul>
                <li>2020.12~2020.06(종료 예정)</li>
                <li>개발의 개념과 알고리즘을 Java로 학습</li>
                <li>Java, JSP, SQL</li>
              </ul>
            </div>
          </a>
          <a data-type="Developer" href="#p2" class="project" target="blank" id="p2">
            <img src={nodeSt} alt="project1" class="project__img" />
            <div class="project__description">
              <h3>[Node.js 스터디]</h3>
              <ul>
                <li>2020.01~2020.04</li>
                <li>nodejs를 통한 웹의 기초 학습</li>
                <li>nodejs, mongodb</li>
              </ul>
            </div>
          </a>
          <a data-type="Marketer" href="#p3" class="project" target="blank" id="p3">
            <img src={happy} alt="project1" class="project__img" />
            <div class="project__description">
              <h3>[해피톡 홈페이지 리뉴얼]</h3>
              <ul>
                <li>2019.01~20ß19.06</li>
                <li>고객 경험 개선을 위한<br />홈페이지 리뉴얼 진행</li>
                <li>GA, GTM</li>
              </ul>
            </div>
          </a>
          <a data-type="Developer" href="#p4" class="project" target="blank" id="p4">
            <img src={dataR} alt="project1" class="project__img" />
            <div class="project__description">
              <h3>[빅데이터 R 수업 수료]</h3>
              <ul>
                <li>2019.02~2019.03</li>
                <li>빅데이터를 다루기 위한<br />R의 데이터 구조 이해</li>
                <li>R, Java</li>
              </ul>
            </div>
          </a>
          <a data-type="Marketer" href="#p5" class="project" target="blank" id="p5">
            <img src={iwt} alt="project1" class="project__img" />
            <div class="project__description">
              <h3>[회사 홈페이지 리뉴얼]</h3>
              <ul>
                <li>2017.01~2017.04</li>
                <li>홈페이지 기획 및 프로젝트 리딩</li>
                <li>워드프레스</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </section>

  );
}

export default Work;