import React from 'react';
import styled from "styled-components";

function Home(props) {

  const { title, description, description2 } = props.homeData;

  return (
    <StyledHomeSection id="Home">
      <div className="home__container">
        <img src="" alt="김서현" className="home__avatar" />
        <h1 className="home__title">
          title<br />
        </h1>
        <h2 className="home__description">
          description<br /><br />
        </h2>
        <h3 className="home__description">
          description2
        </h3>
      </div>
    </StyledHomeSection>
  )
}

export default Home;

const StyledHomeSection = styled.section`
  .home__contianer {
    
  }
`;
