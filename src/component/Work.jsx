import React from 'react';
import styled from "styled-components";


export function Work() {
  return (
    <SectionAbout id="work" className="section">
      <div className="section__container">

        <h1>My Work</h1>
        <h3>Projects</h3>
        <div className="work__categories">
          <button data-filter="All" className="category__btn selected">
            All<span className="category__count">5</span>
          </button>
          <button data-filter="Developer" className="category__btn">
            Developer<span className="category__count">3</span>
          </button>
          <button data-filter="Marketer" className="category__btn">
            Marketer<span className="category__count">2</span>
          </button>
        </div>

        <div className="work__projects">
          <a data-type="Developer" href="#p1" className="project" target="blank" id="p1">
            {/* <img src={board} alt="project1" className="project__img" /> */}
            <div className="project__description">
              <h3>[웹 프로그래밍 Java]</h3>
              <ul>
                <li>2020.12~2020.06(종료 예정)</li>
                <li>개발의 개념과 알고리즘을 Java로 학습</li>
                <li>Java, JSP, SQL</li>
              </ul>
            </div>
          </a>
          <a data-type="Developer" href="#p2" className="project" target="blank" id="p2">
            {/* <img src={nodeSt} alt="project1" className="project__img" /> */}
            <div className="project__description">
              <h3>[Node.js 스터디]</h3>
              <ul>
                <li>2020.01~2020.04</li>
                <li>nodejs를 통한 웹의 기초 학습</li>
                <li>nodejs, mongodb</li>
              </ul>
            </div>
          </a>
          <a data-type="Marketer" href="#p3" className="project" target="blank" id="p3">
            {/* <img src={happy} alt="project1" className="project__img" /> */}
            <div className="project__description">
              <h3>[해피톡 홈페이지 리뉴얼]</h3>
              <ul>
                <li>2019.01~20ß19.06</li>
                <li>고객 경험 개선을 위한<br />홈페이지 리뉴얼 진행</li>
                <li>GA, GTM</li>
              </ul>
            </div>
          </a>
          <a data-type="Developer" href="#p4" className="project" target="blank" id="p4">
            {/* <img src={dataR} alt="project1" className="project__img" /> */}
            <div className="project__description">
              <h3>[빅데이터 R 수업 수료]</h3>
              <ul>
                <li>2019.02~2019.03</li>
                <li>빅데이터를 다루기 위한<br />R의 데이터 구조 이해</li>
                <li>R, Java</li>
              </ul>
            </div>
          </a>
          <a data-type="Marketer" href="#p5" className="project" target="blank" id="p5">
            {/* <img src={iwt} alt="project1" className="project__img" /> */}
            <div className="project__description">
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
    </SectionAbout>
  );
}

/////////////style/////////////
const SectionAbout = styled.section`
  justify-content : center;
  display : flex;
  border : 1px solid black;
  .work__projects{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
`;


export default Work;