import React, { useContext } from "react";
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
import { RecipeContext } from "../../context/RecipeProvider";

const Login = () => {
	const { name, setName, password, setPassword } = useContext(RecipeContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem("username", name);
		localStorage.setItem("password", password);
		navigate("/");
	};
	return (
		<LoginContainer>
			<FormContaier>
				<StyledImg src={logo} />
				<Header>Deliciousness to your inbox</Header>
				<StyledForm onSubmit={handleSubmit}>
					<StyledInput
						type="text"
						placeholder="username"
						required
						onChange={(e) => setName(e.target.value)}
					/>
					<StyledInput
						type="password"
						placeholder="password"
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
					<StyledButton type="submit">Login</StyledButton>
				</StyledForm>
			</FormContaier>
		</LoginContainer>
	);
};

export default Login;
