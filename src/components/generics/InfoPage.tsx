import React from 'react';
import { PageProps } from 'gatsby';
import styled from 'styled-components';
import Header from '@/components/Header';
import Layout from '@/components/Layout';

const FullHeight = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;
`;
const Main = styled.main`
  height: 100%;
  display: grid;
  place-items: center;
`;

type InfoPageProps = {
  children: any;
};

const InfoPage: React.FC<InfoPageProps> = ({ children }) => (
  <Layout>
    <FullHeight>
      <Header />
      <Main>{children}</Main>
    </FullHeight>
  </Layout>
);

export default InfoPage;
