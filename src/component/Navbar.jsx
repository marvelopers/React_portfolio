import React from 'react';
import styled from "styled-components"

function Navbar() {
	return (
		<StyledNavbar>
			<NavbarContainer>
				<div class="navbar__logo">
					<a href="index.html">
						<img src="" alt="로고" class="navbar__logo--img" />
					</a>
				</div>
				<div class="navbar__menu">
					<ul class="navbar__menu--list">
						<li data-link="#goToBlog" class="navbar__menu__item"> <a href="blog.html">Go to blog</a></li>
						<li data-link="#aboutMe" class="navbar__menu__item active">About Me</li>
					</ul>
				</div>
			</NavbarContainer>
		</StyledNavbar>
	);
}

export default Navbar;

const StyledNavbar = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const NavbarContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  align-items: center;
  color: var(--color-dark-black);
  padding: 3px;
	`;
