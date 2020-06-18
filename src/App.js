import React from 'react';
import logo from './logo.svg';
import './App.css';

//profile
import Navbar from './component/profile/Navbar';
import Home from './component/profile/Home';
import About from './component/profile/About';
import Work from './component/profile/Work';
import Testimonials from './component/profile/Testimonials';
import Contact from './component/profile/Contact';

//blog
import Card from './component/blog/Card';
import CardList from './component/blog/CardList';
import Write from './component/blog/Write';

import { store } from "./store/store";

import { useDispatch, useSelector } from "react-redux";
import { profileDataReducer, getProfileData } from "./store/store";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



/////////////////////////
const GlobalStyle = createGlobalStyle`
  body{
    padding : 0;
    margin : 0;
    font-family : "Noto Sans KR", sans-serif;
    cursor : default;
  }
`;

/////////////////////////


function App() {

  const dispatch = useDispatch();
  const storeData = useSelector(getProfileData);


  /*
  * action: {type: string, payload: parameter}
  */

  useEffect(() => {

  }, []);

  const data = JSON.stringify(storeData.homeData);

  console.log(data);

  return (
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
            <Switch>
              <Route path="/" exact={true}>
                <AboutMe />
              </Route>
              <Route path="/blog">
                <GoToBlog />
              </Route>
            </Switch>
          </section >
        </main>
      </Router>
    </>
  );
}

<<<<<<< HEAD
=======
function AboutMe() {
  return (
    <>
      <Home></Home>
      <About></About>
      <Work></Work>
      <Testimonials ></Testimonials>
      <Contact></Contact>
    </>
  )

}
function GoToBlog() {
  return (
    <>
      <Card></Card>
      <CardList></CardList>
      <Write></Write>
    </>
  )
}


>>>>>>> App+Router
export default App;
