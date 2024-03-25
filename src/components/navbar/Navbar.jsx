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
				<i>Foodie</i>
			</Brand>
			<Hamburger onClick={() => setIsOpen(!isOpen)}>
				<GiHamburgerMenu />
			</Hamburger>
			<Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
				<MenuLink to="/">Home</MenuLink>
				<MenuLink to="about">About</MenuLink>
				<MenuLink to="register">Register</MenuLink>
				<MenuLink to="logout" onClick={() => sessionStorage.clear()}>
					Logout{" "}
				</MenuLink>
			</Menu>
		</Nav>
	);
};

export default Navbar;
