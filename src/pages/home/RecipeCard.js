import React, { useContext } from "react";
import {
	Button,
	Cards,
	MainContainer,
	RecipeHeader,
	RecipeImage,
} from "./homeS";
import { RecipeContext } from "../../context/RecipeProvider";
import { useNavigate } from "react-router-dom";

const RecipeCard = () => {
	const { recipes } = useContext(RecipeContext);
	const navigate = useNavigate();
	console.log(recipes[0].recipe);

	return (
		<MainContainer>
			{recipes.map(({ recipe }) => (
				<Cards key={recipe.calories}>
					<RecipeHeader>{recipe.label} </RecipeHeader>

					<RecipeImage src={recipe.image} />
					<Button
						onClick={() =>
							navigate("/details", { state: { recipe } })
						}
					>
						Details
					</Button>
				</Cards>
			))}
		</MainContainer>
	);
};

export default RecipeCard;
