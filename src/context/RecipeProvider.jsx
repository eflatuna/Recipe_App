import React, { createContext, useState } from "react";
import axios from "axios";
//!context alani!
export const RecipeContext = createContext();

const APP_ID = "23a6f031";
const APP_KEY = "f0f4e0a59783c423a3dc82545d6d329b";

const RecipeProvider = ({ children }) => {
	//!login ve privaterouter sayfaları için

	const [name, setName] = useState(localStorage.getItem("username") || "");
	const [password, setPassword] = useState(
		localStorage.getItem("password") || ""
	);
	//!home, header ve recipeCard sayfaları için
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [query, setQuery] = useState("");
	const [mealType, setMealType] = useState("Breakfast");

	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;
	const getData = async () => {
		setLoading(true);
		try {
			const { data } = await axios.get(url);
			console.log(data.hits);
			setRecipes(data.hits);
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};
	if (error) {
		return <p>Something went wrong.....</p>;
	}
	if (loading) {
		return <p>loading...</p>;
	}
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
				getData,
			}}
		>
			{children}
		</RecipeContext.Provider>
	);
};

export default RecipeProvider;
