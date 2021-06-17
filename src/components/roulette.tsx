import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { navigateToNextView } from '@/utils';
import centerLogo from '../assets/center.png';
import pointer from '../assets/pointer.png';

const baseUrl = process.env.GATSBY_API_URL;

const RouletteContainer = styled.div`
  & {
    min-width: 100%;
    min-height: 100%;
    border-radius: 50%;
    background: #f3f6fa;
    position: relative;
    z-index: 1;
    animation: rotation 9s ease-in-out forwards;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(5400deg);
    }
  }
`;

const FadeOut = styled.div<{ fadeOut: boolean }>`
  transition: 1s ease;
  ${({ fadeOut }) => fadeOut && 'opacity: 0;'}
`;

const RouletteWrapper = styled.div`
  --tot-size: 400px;
  @media (max-width: 480px) {
    --tot-size: 300px;
  }
  width: var(--tot-size);
  height: var(--tot-size);
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
    left: calc(50% - 23px);
    margin-top: -2.5%;
    @media (max-width: 480px) {
      margin-top: -12.5%;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background: #536789;
  position: absolute;
  top: 50%;
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
  width: 18%;
  position: absolute;
  top: 41%;
  left: 41%;
`;

const Content = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-top: 20px;
  height: 95%;
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
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  text-align: center;
  color: #002350;
  max-width: 150px;
  margin: 0 auto;
  height: 2em;
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const Heading = styled.h1`
  font-family: Comfortaa, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 133%;
  text-align: center;
  color: #ffffff;
  margin-bottom: 3em;
`;

const Logo = styled.div<{ logo: string }>`
  display: block;
  margin: 0.5em auto 0;
  border: 1px solid #8495aa;
  width: 32px;
  height: 32px;
  background-image: url('${(props): string =>
    props.logo || `https://picsum.photos/200`}');
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

const RouletteComponent: React.FC<{ prizes: any; fadeOut: boolean }> = ({
  prizes,
  fadeOut,
}) => (
  <FadeOut fadeOut={fadeOut}>
    <Heading>¡Buena suerte!</Heading>
    <RouletteWrapper>
      <RouletteContainer>
        <Line1 />
        <Line2 />
        <Line3 />
        <LogoCenter src={centerLogo} />
        <Content1>
          <PrizeTitle>{prizes[0].title}</PrizeTitle>
          <Logo
            logo={`${baseUrl}${prizes[0].photo[0].formats.thumbnail.url}`}
          />
        </Content1>
        <Content2>
          <PrizeTitle>{prizes[1].title}</PrizeTitle>
          <Logo
            logo={`${baseUrl}${prizes[1].photo[0].formats.thumbnail.url}`}
          />
        </Content2>
        <Content3>
          <PrizeTitle>{prizes[2].title}</PrizeTitle>
          <Logo
            logo={`${baseUrl}${prizes[2].photo[0].formats.thumbnail.url}`}
          />
        </Content3>
        <Content4>
          <PrizeTitle>{prizes[3].title}</PrizeTitle>
          <Logo
            logo={`${baseUrl}${prizes[3].photo[0].formats.thumbnail.url}`}
          />
        </Content4>
        <Content5>
          <PrizeTitle>{prizes[4].title}</PrizeTitle>
          <Logo
            logo={`${baseUrl}${prizes[4].photo[0].formats.thumbnail.url}`}
          />
        </Content5>
        <Content6>
          <PrizeTitle>{prizes[5].title}</PrizeTitle>
          <Logo
            logo={`${baseUrl}${prizes[5].photo[0].formats.thumbnail.url}`}
          />
        </Content6>
      </RouletteContainer>
    </RouletteWrapper>
  </FadeOut>
);

const Roulette: React.FC = () => {
  const [prizes, setPrizes] = useState([]);
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    setPrizes(JSON.parse(localStorage.getItem('prizesData')));
    setTimeout(() => setFadeOut(true), 7500);
    setTimeout(navigateToNextView, 9000);
  }, []);
  if (!prizes || prizes.length < 6) {
    return null;
  }
  return <RouletteComponent prizes={prizes} fadeOut={fadeOut} />;
};

export default Roulette;
