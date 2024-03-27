import React from "react";
import "./headerS";
import {
	FoodInput,
	FormContainer,
	HeaderContainer,
	MainHeader,
	Button,
	Select,
} from "./headerS";

const Header = ({ setQuery, setMeal, mealType, getData }) => {
	const handleSubmit = () => {};
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
						name="meal"
						id="meal"
						onChange={(e) => setMeal(e.target.value)}
					>
						{mealType.map((meal, index) => {
							return (
								<option key={index} value={meal}>
									{meal}
								</option>
							);
						})}
					</Select>
				</FormContainer>
			</HeaderContainer>
		</div>
	);
};

export default Header;
