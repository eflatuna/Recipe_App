import React, { createContext, useState } from "react";
//!context alani!
export const RecipeContext = createContext();

const APP_ID = "23a6f031";
const APP_KEY = "f0f4e0a59783c423a3dc82545d6d329b";

const RecipeProvider = ({ children }) => {
	const [name, setName] = useState(localStorage.getItem("username") || "");
	const [password, setPassword] = useState(
		localStorage.getItem("password") || ""
	);

	const [recipes, setRecipes] = useState([]);
	const [query, setQuery] = useState("");
	const [mealType, setMealType] = useState("Breakfast");

	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

	return (
		<RecipeContext.Provider
			value={{
				name,
				setName,
				password,
				setPassword,
				setQuery,
				setMealType,
				recipes,
			}}
		>
			{children}
		</RecipeContext.Provider>
	);
};

export default RecipeProvider;
