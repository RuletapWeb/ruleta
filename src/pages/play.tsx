import React from 'react';
import { PageProps } from 'gatsby';
import styled from 'styled-components';
import InfoPage from '@/components/generics/infoPage';
import Roulette from '@/components/roulette';
import ViewWrapper from '@/components/generics/viewWrapper';

const Container = styled.div`
  background: linear-gradient(17.24deg, #8c91ff -13.8%, #14d2b9 92.35%);
  display: grid;
  place-items: center;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
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

const Play: React.FC<PageProps> = () => (
  <InfoPage isProtected>
    <Container>
      <ViewWrapper dMaxWidth={400}>
        <Heading>¡Buena suerte!</Heading>
        <Roulette />
      </ViewWrapper>
    </Container>
  </InfoPage>
);

export default Play;
