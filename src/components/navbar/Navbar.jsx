import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./navbarS.js";
import { Brand, Menu, Nav, MenuLink, Hamburger } from "./navbarS";
import { GiHamburgerMenu } from "react-icons/gi";
import { RecipeContext } from "../../context/RecipeProvider";
import { LoginContext } from "../../context/LoginProvider.jsx";

const Navbar = () => {
	const { user, setUser } = useContext(LoginContext);
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
				{!user ? (
					<MenuLink to="/login">Login</MenuLink>
				) : (
					<MenuLink onClick={() => setUser({ name: "" })} to="/login">
						Logout
					</MenuLink>
				)}
			</Menu>
		</Nav>
	);
};

export default Navbar;
