import styled from "styled-components";
import Flex from "../../components/globalStyles/FlexStyle";

export const DetailContainer = styled(Flex)`
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.navbarColor};
	min-height: calc(100vh - 75px);
	padding: 0.5rem;
`;

export const DetailPart = styled(Flex)`
	flex-direction: row;
	margin: 1rem;
	border: 1px solid white;
	border-radius: 5px;
	background-color: white;
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
