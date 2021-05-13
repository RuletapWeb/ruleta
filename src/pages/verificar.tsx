import React from 'react';
import { PageProps, Link } from 'gatsby';

import Header from '@/components/Header';
import Layout from '@/components/Layout';

const Verificar: React.FC<PageProps> = () => (
  <Layout>
    <Header />
    <main>
      <p>2 - Verificar Datos</p>
      <Link to="/success">Prox pag</Link>
    </main>
  </Layout>
);

export default Verificar;
