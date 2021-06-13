import React from 'react';
import { PageProps, Link } from 'gatsby';

import Header from '@/components/header';
import Layout from '@/components/layout';

const IngresarDatos: React.FC<PageProps> = () => (
  <Layout>
    <Header />
    <main>
      <p>1 - Ingresar Datos</p>
      <Link to="/verificar">Prox pag</Link>
    </main>
  </Layout>
);

export default IngresarDatos;
