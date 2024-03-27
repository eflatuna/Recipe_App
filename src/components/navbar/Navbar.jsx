import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbarS.js";
import { Brand, Menu, Nav, MenuLink, Hamburger } from "./navbarS";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Nav justify="space-between" wrap="wrap">
			<Brand to="/">
				<h1>Foodie</h1>
			</Brand>
			<Hamburger onClick={() => setIsOpen(!isOpen)}>
				<GiHamburgerMenu />
			</Hamburger>
			<Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
				<MenuLink to="/">Home</MenuLink>
				<MenuLink to="about">About</MenuLink>
				<MenuLink to="register">Register</MenuLink>
				<MenuLink to="login" onClick={() => sessionStorage.clear()}>
					Login{" "}
				</MenuLink>
			</Menu>
		</Nav>
	);
};

export default Navbar;
