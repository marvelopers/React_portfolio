import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

//profile
import Navbar from './component/profile/Navbar';

import { useDispatch, useSelector } from "react-redux";
import { profileDataReducer, getProfileData } from "./store/store";
import { RouteContainer } from "./route";

import {
  BrowserRouter as Router,
} from "react-router-dom";

import { store, getModalStatusData } from "./store/store";
import { CardModal } from "./component/blog";

/////////////////////////
const GlobalStyle = createGlobalStyle`
  head{
    
  }
  body{
    width:1080px;
    margin : auto;    
    padding : 0;
    font-family : "Noto Sans KR", sans-serif;
    color : #222222;
    cursor : default;
  }
`

/////////////////////////


function App() {

  //Redux_Store
  const dispatch = useDispatch();
  const storeData = useSelector(getProfileData);
  const modalStatusData = useSelector(getModalStatusData);

  useEffect(() => {
    console.log('modalStatusData', modalStatusData);
  }, []);

  const data = JSON.stringify(storeData.homeData);

  return (
    //하나의 객체만 return 한다.
    <>
      <GlobalStyle />
      <Router>
        <Navbar></Navbar>
        <main>
          <section id="portfolio">
            <RouteContainer></RouteContainer>
          </section >
          <section id="blog"></section>
          {modalStatusData.isOpen && <CardModal />}
        </main>
      </Router>
    </>
  );
}

// function AboutMe() {
//   return (
//     <>
//       <Home></Home>
//       <About></About>
//       <Work></Work>
//       <Testimonials ></Testimonials>
//       <Contact></Contact>
//     </>
//   )

// }
// function GoToBlog() {
//   return (
//     <>
//       <Card></Card>
//       <CardList></CardList>
//       <Write></Write>
//     </>
//   )
// }

export default App;
