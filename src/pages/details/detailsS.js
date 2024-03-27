import styled from "styled-components";
import Flex from "../../components/globalStyles/FlexStyle";

export const DetailContainer = styled(Flex)`
	/* flex-direction: row; */
	@media (max-width: ${({ theme }) => theme.screens.lg}) {
		flex-direction: column;
		background-color: white;
		min-height: calc(100vh - 75px);
		padding: 0.5rem;
	}
`;

export const DetailPart = styled.div`
	margin: 1rem;
	border: 1px solid black;
	border-radius: 5px;
	background-color: #fbd0a3;
`;

export const ImgContainer = styled.div`
	border: 1px solid white;
	padding: 10px;
	border-radius: 3px;
	margin: 2rem;
	img {
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const HeaderContainer = styled(Flex)`
	margin: 25px;
	color: #411f01;
	img {
		width: 200px;
	}
`;
export const IngContainer = styled.div`
	width: 400px;
	font-size: 1.4rem;
	margin: 2rem;
`;

export const OtherPart = styled.div`
	width: 400px;
	text-align: center;
	font-size: 1.8rem;
	margin: 2rem;
`;
