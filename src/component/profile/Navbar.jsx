import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { routes } from "../../route/route";

export function Navbar() {
  return (
    <NavbarStyle id="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <a href="index.html">
          </a>
        </div>
        <div className="navbar__menu">
          <ul className="navbar__menu--list">
            {routes.map(r => {
              return (
                <li className={r.className}>
                  <Link to={r.path}>{r.page}</Link>
                </li>
              )
            })
            }
          </ul>
        </div>
        {/* <button className="navbar__toggle--btn">Button</button> */}
      </div>
    </NavbarStyle>
  )
};


/////////////////////////

const NavbarStyle = styled.div`
  position: fixed;
  width :100%;
  z-index : 1000;

  .navbar__container{
  width: 1080px;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  align-items: center;
  color: var(--color-dark-black);
  padding: 3px;
  box-shadow: rgba(0, 0.1, 0.1, 0.049) 0px 5px 12px;
  
  .navbar__menu--list{
    display :  flex;
    justify-content : space-between;
    align-items : center;
  }

}
`;


export default Navbar;