import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import { HeaderText, HomeImg, ImgDiv } from "./homeS";
import chefImg from "../../assets/chef.jpg";
import { RecipeContext } from "../../context/RecipeProvider";
import RecipeCard from "./RecipeCard";

const Home = () => {
	const { recipes } = useContext(RecipeContext);

	return (
		<div>
			<Header />

			{recipes.length > 0 ? (
				<div>
					<RecipeCard />
				</div>
			) : (
				<ImgDiv>
					<HomeImg src={chefImg} />
				</ImgDiv>
			)}
			{/* {recipes?.length === 0 && (
				<HeaderText>The Food can not be found</HeaderText>
			)}
			{recipes?.length > 0 && <Cards recipes={recipes} />} */}
		</div>
	);
};

export default Home;
