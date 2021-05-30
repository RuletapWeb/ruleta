import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import SEO from '@/components/seo';
import FontStyles from '@/components/FontStyles';

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
    box-sizing: border-box;
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
    <GlobalStyle />
    <FontStyles />
    <SEO />
    {children}
  </>
);

export default Layout;
