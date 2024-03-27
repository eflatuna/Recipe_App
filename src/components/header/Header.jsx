import React, { useContext } from "react";
import "./headerS";
import {
	FoodInput,
	FormContainer,
	HeaderContainer,
	MainHeader,
	Button,
	Select,
} from "./headerS";
import { RecipeContext } from "../../context/RecipeProvider";

const Header = () => {
	const { setQuery, setMealType, getData } = useContext(RecipeContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		getData();
	};
	return (
		<div>
			<HeaderContainer>
				<MainHeader>RECIPE APP</MainHeader>

				<FormContainer onSubmit={handleSubmit}>
					<FoodInput
						type="text"
						placeholder="Search"
						onChange={(e) => setQuery(e.target.value)}
					/>

					<Button type="submit">Search</Button>
					<Select
						name="ogunTypes"
						id="ogunTypes"
						onChange={(e) => setMealType(e.target.value)}
					>
						<option value="Breakfast">Breakfast</option>
						<option value="Lunch">Lunch</option>
						<option value="TeaTime">TeaTime</option>
					</Select>
				</FormContainer>
			</HeaderContainer>
		</div>
	);
};

export default Header;
