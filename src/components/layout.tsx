import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { navigate } from 'gatsby';
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

const Layout: React.FC<{ isProtected?: boolean }> = ({
  children,
  isProtected = false,
}) => {
  useEffect(() => {
    if (isProtected) {
      const prizesData = JSON.parse(localStorage.getItem('prizesData'));
      const userData = JSON.parse(localStorage.getItem('userData'));
      console.log(prizesData);
      console.log(userData);
      if (!prizesData || !userData) {
        navigate('/');
      }
    }
  }, []);
  return (
    <>
      <SEO />
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;
