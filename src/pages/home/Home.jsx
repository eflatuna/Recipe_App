import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Cards from "../../components/card/Cards";
import { HeaderText, HomeImg, ImgDiv } from "./homeS";
import chefImg from "../../assets/chef.jpg";

const Home = () => {
	const APP_ID = "23a6f031";
	const APP_KEY = "f0f4e0a59783c423a3dc82545d6d329b";
	const [query, setQuery] = useState("egg");
	const [meal, setMeal] = useState("breakfast");
	const [recipes, setRecipes] = useState(null);
	const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

	const getData = async () => {
		if (query) {
			try {
				const { data } = await axios(url);
				if (data.hits.length > 0) {
					setRecipes(data.hits);
				} else {
					alert("No recipes found for the given query.");
				}
			} catch (error) {
				console.log("Error fetching data:", error);
				alert(
					"An error occured while fetching data.Please try again later"
				);
			}
		} else {
			alert("Please fill in the form");
		}
	};
	console.log(recipes);
	useEffect(() => {
		getData();
	}, []);
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
			{recipes?.length === 0 && (
				<HeaderText>The Food can not be found</HeaderText>
			)}
			{recipes?.length > 0 && <Cards recipes={recipes} />}
		</div>
	);
};

export default Home;
