/** @format */

import React, { useState } from "react";
import styled from "styled-components";

import left_btn from "../pages/chevron-left-solid.svg";
import right_btn from "../pages/chevron-right-solid.svg";
import search from "../pages/search-solid.svg";
import bell from "../pages/bell-regular.svg";
import user from "../pages/user-regular.svg";

const END_INDEX = 10;

const slideImages = [
	"images/ONE.jpeg",
	"images/TWO.jpeg",
	"images/THREE.jpeg",
	"images/FOUR.jpeg",
	"images/FIVE.jpeg",
	"images/SIX.jpeg",
	"images/SEVEN.jpeg",
	"images/EIGHT.jpeg",
	"images/NINE.jpeg",
	"images/TEN.jpg",
	"images/ELEVEN.jpg",
];

function WantedCarousel() {
	const [index, setIndex] = useState(0);

	const slideRight = () => {
		if (index < END_INDEX) {
			setIndex(index + 1);
		}
		if (index === END_INDEX) {
			setIndex(0);
		}
	};

	const slideLeft = () => {
		if (index > 0) {
			setIndex(index - 1);
		}
		if (index <= 0) {
			setIndex(END_INDEX);
		}
	};

	return (
		<Wrapper>
			<NavContainer>
				<ElementContainer>
					<TitleContainer>
						<TitleImage src="https://static.wanted.co.kr/images/icon-menu.png" />
						<Title>Wanted</Title>
					</TitleContainer>
					<ListContainer>
						<List>채용</List>
						<List>이벤트</List>
						<List>직군별 연봉</List>
						<List>이력서</List>
						<List>커뮤니티</List>
						<List>프리랜서ㄴㄴ</List>
						<List>AI 합격예측</List>
					</ListContainer>
					<ServiceContainer>
						<IconContainer>
							<NavEmoticon alt="emoticon" src={search} />
							<NavEmoticon alt="emoticon" src={bell} />
							<NavEmoticon alt="emoticon" src={user} />
						</IconContainer>
						<ButtonContainer>
							<ServiceButton>기업 서비스</ServiceButton>
						</ButtonContainer>
					</ServiceContainer>
				</ElementContainer>
			</NavContainer>
			<CarouselContainer>
				<LeftBar>
					<LeftButton onClick={() => slideLeft()}>
						<ButtonImg alt="button" src={left_btn} />
					</LeftButton>
				</LeftBar>
				<PictureList>
					<ImgList
						className="imgList"
						alt="slide-image"
						src={slideImages[index]}
					/>
				</PictureList>
				<RightBar>
					<RightButton
						onClick={() => {
							slideRight();
						}}
					>
						<ButtonImg alt="button" src={right_btn} />
					</RightButton>
				</RightBar>
			</CarouselContainer>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;
const NavContainer = styled.main`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 60px;
	border-bottom: 1px solid #e5e5e5;
	@media (max-width: 900px) {
		height: 120px;
	}
`;
const ElementContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 70%;
	@media (max-width: 900px) {
		justify-content: space-between;
		height: 120px;
	}
`;
const TitleContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 50px;
	margin: 5px 50px 0 0;
`;
const TitleImage = styled.img`
	width: 20px;
	height: 15px;
`;
const Title = styled.span`
	margin-left: 20px;
	font-size: 23px;
	font-weight: 600;
`;
const ListContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 60%;
	margin-right: 50px;
	@media (max-width: 900px) {
		position: absolute;
		bottom: 30px;
		height: 20px;
	}
`;
const List = styled.span`
	display: flex;
	font-size: 15px;
`;
const ServiceContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 30%;
	@media (max-width: 900px) {
		position: absolute;
		right: 0;
		bottom: 30px;
		height: 20px;
	}
`;
const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 60%;
	height: 50%;
	margin-left: 20px;
	padding-right: 30px;
	border-right: 1px solid gray;
	font-size: 20px;
`;
const NavEmoticon = styled.img`
	width: 20px;
	height: 20px;
`;
const ButtonContainer = styled.span`
	display: flex;
	width: 40%;
	padding-left: 40px;
`;
const ServiceButton = styled.button`
	justify-content: flex-end;
	align-items: center;
	width: 100px;
	height: 35px;
	border-radius: 20px;
	border: 1px solid gray;
	background: none;
	color: gray;
`;
const CarouselContainer = styled.main`
	display: flex;
	justify-content: space-between;
	width: 80%;
	height: 350px;
	margin-top: 20px;
	@media (max-width: 1000px) {
		width: 100%;
	}
`;
const LeftBar = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 5%;
	height: 100%;
	background-color: #5c544d;
`;
const LeftButton = styled.button`
	width: 30px;
	height: 60px;
	margin-left: 2px;
	background-color: #a2aaa6;
	border: none;
	border-radius: 20px;
`;
const ButtonImg = styled.img`
	width: 16px;
	height: 16px;
`;
const PictureList = styled.span`
	width: 80%;
	height: 100%;
`;
const ImgList = styled.img`
	width: 100%;
	height: 100%;
`;
const RightBar = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 5%;
	height: 100%;
	background-color: black;
`;
const RightButton = styled.button`
	width: 30px;
	height: 60px;
	margin-right: 2px;
	background-color: #a2aaa6;
	border: none;
	border-radius: 20px;
`;
export default WantedCarousel;
