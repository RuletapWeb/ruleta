import React from 'react';
import { PageProps, Link } from 'gatsby';

import Header from '@/components/Header';
import Layout from '@/components/Layout';

const Success: React.FC<PageProps> = () => (
  <Layout>
    <Header />
    <main>
      <p>3 - Success</p>
      <Link to="/">Volver al principio</Link>
    </main>
  </Layout>
);

export default Success;
