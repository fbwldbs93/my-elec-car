import { useNavigate } from "react-router";
import styled from "styled-components";
import SocialShare from "hooks/SocialShareHook";

interface CarData {
  brand: string;
  model: string;
  distance: number;
  battery: number;
  MPG: number;
  cost: number;
  homepage: string;
  img?: string;
}

function CarRecommendResult({ ...props }: CarData) {
  const navigate = useNavigate();
  const handleClickBrandHomepage = () => window.open(props.homepage);
  const handleClickMain = () => navigate("/main");

  return (
    <>
      <RecommendResultWrapper>
        <RecommendResultContentWrapper>
          <RecommendResultTitle>나에게 맞는 전기차는?</RecommendResultTitle>
          <RecommendResultCarImage src={props.img} alt="추천 차량 이미지" />
          <RecommendResultContent>
            제조사: {props.brand} <br />
            모델: {props.model} <br />
            주행거리: {props.distance}km <br />
            배터리용량: {props.battery}kWh <br />
            전비: {props.MPG}km/kWh <br />
            가격: {props.cost}만원
          </RecommendResultContent>
          <GotoBrandHompageButton onClick={handleClickBrandHomepage}>
            공식 홈페이지 방문
          </GotoBrandHompageButton>
          <GotoMainButton onClick={handleClickMain}>
            메인으로 이동
          </GotoMainButton>
          <SocialShare />
        </RecommendResultContentWrapper>
      </RecommendResultWrapper>
    </>
  );
}

export default CarRecommendResult;

const RecommendResultWrapper = styled.div`
  flex-direction: column;
  text-align: center;
`;

const RecommendResultContentWrapper = styled.div`
  width: 280px;
  display: inline-block;
`;

const RecommendResultTitle = styled.p`
  font-size: 25px;
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-weight: bold;
`;

const RecommendResultContent = styled.p`
  padding-top: 30px;
  text-align: left;
  line-height: 1.8rem;
`;

const RecommendResultCarImage = styled.img`
  width: 150px;
`;

const GotoBrandHompageButton = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #898989;
  font-size: 14px;
  text-align: center;
  width: 130px;
  cursor: pointer;
  background-color: #f6f6f6;
  margin-top: 1rem;
  display: inline-block;
  margin-right: 1rem;
`;

const GotoMainButton = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 14px;
  text-align: center;
  width: 130px;
  cursor: pointer;
  color: white;
  background-color: #0a84ff;
  margin-top: 1rem;
  display: inline-block;
`;
