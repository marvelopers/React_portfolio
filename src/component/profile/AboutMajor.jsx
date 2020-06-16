import React, { useEffect } from 'react';
import styled from "styled-components";

function About_major(props) {

  // console.log('majorData', props.major);
  // console.log('major-==>', props.majorData);
  const { majorData } = props;

  return (

    <DivMajor className="about__majors">
      {majorData && majorData.map(m => (
        <div className="major">
          <div className="major__icon">
            <i className={m.icon}></i>
          </div>
          <h2 className="major__title">{m.title}</h2>
          <div className="major__description">
            {m.description.join(',')}
          </div>
        </div>
      ))}
    </DivMajor>
  );
}

/////////////style/////////////

const DivMajor = styled.div`
  background-color : blue;
`;

export default About_major;
