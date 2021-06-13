import React from 'react';
import { PageProps } from 'gatsby';
import styled from 'styled-components';
import Centered from '@/components/generics/Centered';
import Layout from '@/components/Layout';

type PrizeHeadingProps = {
  emoji: string;
  title: string;
  prize: string;
};
const Emoji = styled.span`
  display: block;
  font-size: 40px;
  line-height: 100%;
`;
const Title = styled.h4`
  font-family: Comfortaa, sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 133%;
  letter-spacing: 0.15px;
  color: #002350;
`;
const InfoPage: React.FC<PrizeHeadingProps> = ({ emoji, title, prize }) => (
  <Centered>
    <Emoji>{emoji}</Emoji>
  </Centered>
);

export default InfoPage;
