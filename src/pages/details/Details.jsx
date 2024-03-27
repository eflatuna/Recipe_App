import React from "react";
import {
	DetailContainer,
	DetailPart,
	HeaderContainer,
	ImgContainer,
	IngContainer,
	OtherPart,
} from "./detailsS";
import { useLocation, useNavigate } from "react-router-dom";
import chef2 from "../../assets/images2.jpeg";

const Details = () => {
	const navigate = useNavigate();
	const {
		state: { recipe },
	} = useLocation();

	return (
		<DetailContainer>
			<HeaderContainer>
				<h1 style={{ maxWidth: "600px" }}>{recipe.label}</h1>
				<img
					style={{
						cursor: "pointer",
						width: "100px",
					}}
					src={chef2}
					alt=""
					onClick={() => navigate("-1")}
				/>
			</HeaderContainer>

			<DetailPart>
				<OtherPart>
					<h4>NUTRIENTS</h4>

					<p>
						{recipe.totalNutrients.CA.label}:
						{Math.round(recipe.totalNutrients.CA.quantity)}
						{recipe.totalNutrients.CA.unit}
					</p>
					<p>
						{recipe.totalNutrients.CHOCDF.label}:
						{Math.round(recipe.totalNutrients.CHOCDF.quantity)}
						{recipe.totalNutrients.CHOCDF.unit}
					</p>
					<p>
						{recipe.totalNutrients.CHOLE.label}:
						{Math.round(recipe.totalNutrients.CHOLE.quantity)}
						{recipe.totalNutrients.CHOLE.unit}
					</p>
					<p>
						{recipe.totalNutrients.ENERC_KCAL.label}:
						{Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
						{recipe.totalNutrients.ENERC_KCAL.unit}
					</p>
					<p>Total Weight :{Math.round(recipe.totalWeight)}</p>
					<p>Calories:{Math.round(recipe.calories)} </p>
					{/* digest key i ile bize 29 elemanlı bir dizi geliyor, biz onun 4 elemanını bastırmak için slice kullandık */}
					<p>
						{recipe.digest.slice(0, 4).map((item, index) => {
							return (
								<p key={index}>
									{item.label}:{Math.round(item.total)}
								</p>
							);
						})}
					</p>
					<ImgContainer>
						<img src={recipe.image} alt="" />
					</ImgContainer>

					<IngContainer>
						{recipe.ingredientLines.map((item, index) => (
							<div key={index}>
								<p>
									{index + 1} * {item}
								</p>
							</div>
						))}
					</IngContainer>
				</OtherPart>
			</DetailPart>
		</DetailContainer>
	);
};

export default Details;
