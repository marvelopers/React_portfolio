import React from 'react';
import '../css/Navbar.css';
import logo from '../imgs/blog_logo.png';


function Navbar() {
	return (
		<nav id="navbar">
			<div class="navbar__container">
				<div class="navbar__logo">
					<a href="index.html">
						<img src={logo} alt="로고" class="navbar__logo--img" />
					</a>
				</div>
				<div class="navbar__menu">
					<ul class="navbar__menu--list">
						<li data-link="#aboutMe" class="navbar__menu__item active">About Me</li>
						<li data-link="#goToBlog" class="navbar__menu__item"> <a href="blog.html">Go to blog</a></li>
					</ul>
				</div>
				<button id="toggleBtn" class="navbar__toggle-btn">
					<i class="fas fa-bars"></i>
				</button>
			</div>
		</nav>
	);
}

export default Navbar;