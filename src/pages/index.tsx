import React from 'react';
import { PageProps, Link } from 'gatsby';

import Header from '@/components/Header';
import Layout from '@/components/Layout';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <Header />
    <main>
      <p>0 - Home</p>
      <Link to="/ingresar-datos">Prox pag</Link>
    </main>
  </Layout>
);

export default Home;
