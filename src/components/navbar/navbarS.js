import styled from "styled-components";
import Flex from "../globalStyles/FlexStyle";
import { Link } from "react-router-dom";

export const Nav = styled(Flex)`
	padding: 1rem 1.5rem;
`;

export const Brand = styled(Link)`
	color: ${({ theme }) => theme.colors.navbarColor};
	text-decoration: none;
	font-weight: 600;
	font-size: 2rem;
`;

export const Menu = styled(Flex)`
	@media (max-width: ${({ theme }) => theme.screens.lg}) {
		flex-direction: column;
		width: 100%;
	}
	max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
	overflow: hidden;
`;

export const MenuLink = styled(Link)`
	text-align: center;
	padding: 1rem 2rem;
	text-decoration: none;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.navbarColor};
	transition: all 0.3s ease-in;
	&:hover {
		color: rgba(0, 0, 0, 0.6);
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
	color: ${({ theme }) => theme.colors.navbarColor};
	@media (max-width: ${({ theme }) => theme.screens.lg}) {
		display: block;
	}
`;
export default Nav;
