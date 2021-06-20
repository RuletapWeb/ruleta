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

const Play: React.FC<PageProps> = () => (
  <InfoPage isProtected>
    <Container>
      <ViewWrapper dMaxWidth={400}>
        <Roulette />
      </ViewWrapper>
    </Container>
  </InfoPage>
);

export default Play;
