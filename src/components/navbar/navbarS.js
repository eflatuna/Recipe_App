import styled from "styled-components";
import Flex from "../globalStyles/FlexStyle";
import { Link } from "react-router-dom";

export const Nav = styled(Flex)`
	padding: 1rem 1.5rem;
	background-color: #f6e6d9;
`;

export const Brand = styled(Link)`
	color: #411f01;
	text-decoration: none;
	font-weight: 600;
	font-size: 1.5rem;
`;

export const Menu = styled(Flex)`
	@media (max-width: ${({ theme }) => theme.screens.lg}) {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	width: 100%;
	flex-direction: column;
	display: ${({ open }) => (open ? "flex" : "none")};
	max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
	overflow: hidden;
`;

export const MenuLink = styled(Link)`
	text-align: center;
	padding: 0.5rem 1rem;
	text-decoration: none;
	cursor: pointer;
	color: #411f01;
	transition: all 0.3s ease-in;
	&:hover {
		color: rgba(0, 0, 0, 0.8);
		font-weight: bold;
	}
	@media (max-width: ${({ theme }) => theme.screens.lg}) {
		border-bottom: 2px solid ${({ theme }) => theme.colors.navbarColor};
		width: 100%;
	}
`;

export const Hamburger = styled.div`
	display: none;
	cursor: pointer;
	color: #411f01;
	@media (max-width: ${({ theme }) => theme.screens.lg}) {
		display: flex;
	}
`;
export default Nav;
