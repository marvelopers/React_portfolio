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

import { store } from "./store/store";

/////////////////////////
const GlobalStyle = createGlobalStyle`

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

  useEffect(() => {

  }, []);

  const data = JSON.stringify(storeData.homeData);

  return (
    //하나의 객체만 return 한다.
    <>
      <GlobalStyle />
      <button onClick={() => {

        console.log(data);

        dispatch({ type: "SET_DATA", payload: { newHomeData: "NewMarVeloper" } });
      }}>Next Data</button>

      <button onClick={() => {
        dispatch({ type: "SET_DATA", payload: { newHomeData: "NOWMarVeloper" } })
      }}
      >NOW Data</button>

      <button onClick={() => {
        dispatch({ type: "MIX_DATA", payload: { mixHomeData: "DataMix" } })
      }}
      >Mix Data</button>

      <Router><Navbar></Navbar>
        <main>
          <section id="portfolio">
            <RouteContainer></RouteContainer>
          </section >
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
