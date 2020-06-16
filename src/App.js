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

//useeffect



/////////////////////////
const GlobalStyle = createGlobalStyle`
  /* Color */
  --color-white: #ffffff;
  --color-light-white: #FEF7F7;
  --color-dark-white: #dbdbdb;
  --color-grey: #616161;
  --color-light-grey: #7c7979;
  --color-dark-grey: #4d4d4d;
  --color-dark-black: #222222;
  --color-purple: #7c2ae8;
  --color-dark-purple: #2A0E4F;
  --color-deep-purple: #381369;
  --color-orange: #E87041;
  --color-yellow: #fff7d1;

  body{
    padding : 0;
    margin : 0;
    font-family : "Noto Sans KR", sans-serif;
    cursor : default;
  }
`;

/////////////////////////


function App() {
  console.log("STORE=>", store.getState());
  const [profileData, setProfileData] = useState(undefined);



  const getProfileData = () => {
    // console.log('getProfileDataCalled');
    // setProfileData(JSON.parse(localStorage.getItem("profileData")));


    // this.porps = localStorage.getProfileData(profileData);
  }

  useEffect(() => {
    console.log('useEffect');
    // getProfileData()
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <main>
        {profileData &&
          <section id="portfolio">
            <Home></Home>
            <About></About>
            <Work></Work>
            <Testimonials ></Testimonials>
            <Contact></Contact>
            <Card></Card>
            <CardList></CardList>
            <Write></Write>
          </section>
        }
      </main>
    </>
  );
}

export default App;
