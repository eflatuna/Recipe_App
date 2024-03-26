import React from "react";
import {
	DetailContainer,
	DetailPart,
	HeaderContainer,
	OtherPart,
} from "./detailsS";
import { useLocation } from "react-router-dom";
import chef2 from "../../assets/images2.jpeg";

const Details = () => {
	const { state } = useLocation();

	return (
		<DetailContainer>
			<HeaderContainer>
				<h1>{state.label}</h1>
				<img src={chef2} />
			</HeaderContainer>

			<DetailPart>
				<OtherPart>
					<h4>NUTRIENTS</h4>
				</OtherPart>
			</DetailPart>
		</DetailContainer>
	);
};

export default Details;
