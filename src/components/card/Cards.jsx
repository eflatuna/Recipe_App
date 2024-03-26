import React from "react";
import { Button, Card, Header, Image, MainContainer } from "./cardsS";
import defaultImg from "../../assets/default_images.jpeg";
import { useNavigate } from "react-router-dom";

const Cards = ({ recipes }) => {
	const navigate = useNavigate();
	console.log(recipes);
	return (
		<MainContainer wrap="wrap">
			{recipes.map(({ recipe }, index) => {
				return (
					<Card key={index}>
						<Header>{recipe.label}</Header>
						<Image src={recipe.image || { defaultImg }} />
						<Button
							onClick={() =>
								navigate("details", {
									state: recipe,
									replace: false,
								})
							}
						>
							View More
						</Button>
					</Card>
				);
			})}
		</MainContainer>
	);
};

export default Cards;
