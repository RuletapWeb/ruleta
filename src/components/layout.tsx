import React from 'react';
import { createGlobalStyle } from 'styled-components';
import SEO from '@/components/seo';

const GlobalStyle = createGlobalStyle`
* {
    font-family: Comfortaa;
    border: 0 none;
    outline: 0;
    padding: 0;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

/*
 * Insertar Context ACA
 * Todos los children van a tener acceso (todas las views usan layout)
 */
const Layout: React.FC = ({ children }) => (
  <>
    <SEO />
    <GlobalStyle />
    {children}
  </>
);

export default Layout;
