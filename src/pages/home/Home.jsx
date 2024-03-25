import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
	const APP_ID = "23a6f031";
	const APP_KEY = "f0f4e0a59783c423a3dc82545d6d329b";
	const [query, setQuery] = useState("egg");
	const [meal, setMeal] = useState("breakfast");
	const [recipes, setRecipes] = useState([]);

	// const [error, setError] = useState("");

	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

	const getData = async () => {
		try {
			const { data } = await axios(url);
			setRecipes(data.hits);
		} catch (error) {
			console.log(error);
		}
		console.log(recipes);
	};

	useEffect(() => {
		getData();
	}, []);
	return <div>Homee</div>;
};

export default Home;
