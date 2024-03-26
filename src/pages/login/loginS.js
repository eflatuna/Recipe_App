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
	width: 25rem;
	height: 30rem;
	max-width: 50rem;
	background-color: #f6e6d9;
	border-radius: 20px;
	border: 2px solid #f6e6d9;
	padding: 0.5rem;
	margin-bottom: 200px;
	flex-direction: column;
`;

export const Header = styled.h1`
	color: #3c322e;
	font-size: 1.5rem;
`;
export const StyledInput = styled.input`
	height: 2.5rem;
	font-size: 1.1rem;
	width: 15rem;
	border-radius: 5px;
	background-color: #fbd0a3;
	border: none;
	color: rgba(0, 0, 0, 0.6);
	margin: 1rem;
	text-indent: 1rem;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

export const StyledButton = styled.button`
	font-size: 1.5rem;
	background-color: #3c322e;
	border-radius: 5px;
	color: white;
	border: none;
	margin: 1rem;
	padding: 5px;
	&:hover {
		opacity: 0.9;
	}
`;

export const StyledImg = styled.img`
	width: 150px;
	margin: 1rem;
	border-radius: 50%;
`;
