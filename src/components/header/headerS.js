import styled from "styled-components";
import Flex from "../globalStyles/FlexStyle";

export const HeaderContainer = styled(Flex)`
	background-color: ${({ theme }) => theme.colors.navbarColor};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const MainHeader = styled.h2`
	margin-top: 1rem;
	font-size: 2rem;
	color: #411f01;
`;

export const FormContainer = styled.form`
	display: flex;
	/* flex-direction: row; */
	flex-wrap: wrap;
	justify-content: center;
	border: 2px solid white;
	border-radius: 3px;
	margin: 20px;
	background-color: #fbd0a3;
`;
export const FoodInput = styled.input`
	height: 3rem;
	width: 15rem;
	border: none;
	border-radius: 3px;
	text-indent: 10px;
	outline: none;
	margin: 5px;
	font-size: 2rem;
`;

export const Button = styled.button`
	background-color: #f39b27;
	padding: 5px;
	/* outline: 3rem; */
	height: 3rem;
	border: none;
	margin: 5px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 2rem;
	color: #411f01;
	&:hover {
		background-color: ${({ theme }) => theme.colors.navbarColor};
		transition: all 0.3s ease-in;
		border: 1px solid white;
	}
`;

export const Select = styled.select`
	border-radius: 3px;
	height: 3rem;
	margin: 5px;
	padding: 5px;
	border: none;
	font-size: 2rem;
	color: #411f01;
`;
