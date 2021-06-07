import React from 'react';
import styled from 'styled-components';
import dummyPrizes from '../assets/dummyPrizes.json';
import centerLogo from '../assets/center.png';
import pointer from '../assets/pointer.png';

const dummyData = dummyPrizes
  .map((prize) => ({ option: prize.name }))
  .slice(0, 5);

const RouletteContainer = styled.div`
  & {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: #f3f6fa;
    position: relative;
    z-index: 1;
    animation: rotation 5s ease-in-out forwards;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(5400deg);
    }
  }
`;
const RouletteWrapper = styled.div`
  &::before {
    content: '';
    display: block;
    background-image: url(${pointer});
    width: 45px;
    height: 60px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    z-index: 99;
    left: 48.2%;
    margin-top: -2.5%;
  }
`;
const Line = styled.div`
  width: 400px;
  height: 3px;
  background: #536789;
  position: absolute;
  top: 199px;
  left: 0;
`;
const Line1 = styled(Line)`
  transform: rotate(60deg);
`;
const Line2 = styled(Line)`
  transform: rotate(120deg);
`;
const Line3 = styled(Line)`
  transform: rotate(180deg);
`;
const LogoCenter = styled.img`
  width: 70px;
  position: absolute;
  top: 41%;
  left: 41%;
`;
const Content = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-top: 20px;
  height: 380px;
  position: absolute;
  width: 100%;
  text-align: center;
`;
const Content1 = styled(Content)`
  transform: rotate(0deg);
`;
const Content2 = styled(Content)`
  transform: rotate(60deg);
`;
const Content3 = styled(Content)`
  transform: rotate(120deg);
`;
const Content4 = styled(Content)`
  transform: rotate(180deg);
`;
const Content5 = styled(Content)`
  transform: rotate(240deg);
`;
const Content6 = styled(Content)`
  transform: rotate(300deg);
`;
const PrizeTitle = styled.h6`
  & {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 19.3402px;
    text-align: center;
    color: #002350;
    max-width: 100px;
    margin: 0 auto;
  }
  &::after {
    content: '😈';
    display: block;
    margin-top: 2em;
  }
`;
const Roulette: React.FC = () => (
  <>
    <RouletteWrapper>
      <RouletteContainer>
        <Line1 />
        <Line2 />
        <Line3 />
        <LogoCenter src={centerLogo} />
        <Content1>
          {` `}
          <PrizeTitle>Pizza Hawaiiana </PrizeTitle>
          {` `}
        </Content1>
        <Content2>
          {` `}
          <PrizeTitle>Pizza Hawaiiana </PrizeTitle>
          {` `}
        </Content2>
        <Content3>
          {` `}
          <PrizeTitle>Pizza Hawaiiana </PrizeTitle>
          {` `}
        </Content3>
        <Content4>
          {` `}
          <PrizeTitle>Pizza Hawaiiana </PrizeTitle>
          {` `}
        </Content4>
        <Content5>
          {` `}
          <PrizeTitle>Pizza Hawaiiana </PrizeTitle>
          {` `}
        </Content5>
        <Content6>
          {` `}
          <PrizeTitle>Pizza Hawaiiana </PrizeTitle>
          {` `}
        </Content6>
      </RouletteContainer>
    </RouletteWrapper>
  </>
);

export default Roulette;
