import styled from "styled-components";
import Flex from "../../components/globalStyles/FlexStyle";

export const LoginContainer = styled(Flex)`
	height: 100vh;
	background-image: url("https://cdn.pixabay.com/photo/2017/06/06/22/37/italian-cuisine-2378729_1280.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

export const FormContaier = styled(Flex)`
	width: 30rem;
	height: 30rem;
	max-width: 50rem;
	background-color: white;
	border-radius: 20px;
	border: 2px solid #f38d6e;
	padding: 0.5rem;
	margin-bottom: 200px;
	flex-direction: column;
`;

export const Header = styled.h1`
	color: rgba(0, 0, 0, 0.6);
	font-size: 1.5rem;
`;
export const StyledInput = styled.input`
	height: 3rem;
	font-size: 1rem;
	width: 15rem;
	border-radius: 5px;
	background-color: #f38d6e;
	border: none;
	color: white;
	margin: 1rem;
	text-indent: 1rem;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

export const StyledButton = styled.button`
	font-size: 1.5rem;
	background-color: rgba(0, 0, 0, 0.6);
	border-radius: 5px;
	color: white;
	border: none;
	margin: 1rem;
	&:hover {
		opacity: 0.8;
	}
`;

export const StyledImg = styled.img`
	width: 150px;
	margin: 1rem;
`;
