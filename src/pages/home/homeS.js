import styled from "styled-components";
import Flex from "../../components/globalStyles/FlexStyle";

export const ImgDiv = styled.div`
	display: flex;
	justify-content: center;
	margin: 1.5rem;
`;
export const HomeImg = styled.img`
	width: 80%;
	max-width: 750px;
`;

export const HeaderText = styled.h1`
	font-size: 2.5rem;
	color: black;
	text-align: center;
`;

export const MainContainer = styled(Flex)`
	flex-direction: row;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const Cards = styled(Flex)`
	flex-direction: column;
	height: 20rem;
	width: 20rem;
	background-color: ${({ theme }) => theme.colors.navbarColor};
	padding: 0.5rem;
	border-radius: 3px;
	margin: 0.7rem;
	box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
	color: #411f01;
	&:hover {
		box-shadow: none;
		transition: all 0.3s ease-in;
	}
`;

export const RecipeImage = styled.img`
	height: 10rem;
	border-radius: 10px;
`;
export const Button = styled.button`
	background-color: #f39b27;
	padding: 0.7rem;
	outline: none;
	border: none;
	margin: 0.5rem;
	border-radius: 3px;
	cursor: pointer;
	&:hover {
		opacity: 0.9;
	}
`;

export const RecipeHeader = styled.h1`
	font-size: 1.5rem;
	text-align: center;
`;
