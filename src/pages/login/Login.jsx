import React from "react";
import {
	LoginContainer,
	FormContaier,
	StyledImg,
	Header,
	StyledInput,
	StyledForm,
	StyledButton,
} from "./loginS";
import logo from "../../assets/logo_food.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const userInfo = {
		username: "esra",
		password: "1234",
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		sessionStorage.setItem("esra", JSON.stringify(userInfo));
		navigate("-1");
	};

	return (
		<LoginContainer>
			<FormContaier>
				<StyledImg src={logo} />
				<Header>Deliciousness to your inbox</Header>
				<StyledForm onSubmit={handleSubmit}>
					<StyledInput placeholder="Enter username" type="text" />
					<StyledInput placeholder="Enter password" type="password" />
					<StyledButton type="submit">Login</StyledButton>
				</StyledForm>
			</FormContaier>
		</LoginContainer>
	);
};

export default Login;
