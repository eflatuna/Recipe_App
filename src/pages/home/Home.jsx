import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Cards from "../../components/card/Cards";
import { HomeImg, ImgDiv } from "./homeS";
import chefImg from "../../assets/chef.jpg";

const Home = () => {
	const APP_ID = "23a6f031";
	const APP_KEY = "f0f4e0a59783c423a3dc82545d6d329b";
	const [query, setQuery] = useState("egg");
	const [meal, setMeal] = useState("breakfast");
	const [recipes, setRecipes] = useState("");
	const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
	// const [error, setError] = useState("");

	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

	const getData = async () => {
		if (query) {
			try {
				const { data } = await axios(url);
				setRecipes(data.hits);
			} catch (error) {
				console.log(error);
			}
		} else {
			alert("Fill the Form");
		}
	};
	console.log(recipes);
	// useEffect(() => {
	// 	getData();
	// }, []);
	return (
		<div>
			<Header
				setQuery={setQuery}
				setMeal={setMeal}
				mealType={mealType}
				getData={getData}
			/>

			{!recipes && (
				<ImgDiv>
					<HomeImg src={chefImg} />
				</ImgDiv>
			)}

			<Cards />
		</div>
	);
};

export default Home;
