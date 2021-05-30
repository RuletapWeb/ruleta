import React from 'react';
import { PageProps, Link } from 'gatsby';

import Header from '@/components/Header';
import TextInput from '@/components/generics/TextInput';
import ViewWrapper from '@/components/generics/ViewWrapper';
import PrizeList from '@/components/PrizeList';
import Layout from '@/components/Layout';
import Roulette from '@/components/Roulette';
import dummyPrizes from '../assets/dummyPrizes.json';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <Header />
    <main
      style={{
        background: `linear-gradient(12.03deg, #8C91FF -11.5%, #14D2B9 100.72%)`,
        display: `grid`,
        placeItems: `center`,
      }}
    >
      <h1>Jugá a la Ruletap y ganá premios en comercios</h1>
      <ViewWrapper dMaxWidth={326}>
        <TextInput
          type="mail"
          placeholder="Mail"
          icon="mail"
          infoText="Acá te enviaremos el código de canje"
        />
        <TextInput
          type="phone"
          placeholder="Número de celular"
          icon="phone"
          infoText="Con código de área sin el 0 y sin el 15"
        />
      </ViewWrapper>
      <PrizeList title="Premios disponibles" quantity={6} items={dummyPrizes} />
      <p>0 - Home</p>
      <Link to="/ingresar-datos">Prox pag</Link>
    </main>
  </Layout>
);

export default Home;
