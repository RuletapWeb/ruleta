import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import SEO from '@/components/seo';

const GlobalStyle = createGlobalStyle`
* {
    vertical-align: baseline;
    font-weight: inherit;
    font-family: inherit;
    font-style: inherit;
    font-size: 100%;
    border: 0 none;
    outline: 0;
    padding: 0;
    margin: 0;
  }
`;

type Props = {
  children: React.ReactNode;
};

/*
 * Insertar Context ACA
 * Todos los children van a tener acceso (todas las views usan layout)
 */
const Layout: React.FC<Props> = ({ children }) => (
  <>
    <SEO title="Tap" />
    <GlobalStyle />
    {children}
  </>
);

export default Layout;
