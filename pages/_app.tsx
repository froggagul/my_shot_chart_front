import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';


const Layout = ({ Component }: AppProps) => (
  <>
    <Head>
      <title>My Shot Chart</title>
      <link rel="icon" type="image/x-icon" href="/titleIcon.png" />
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <Component />
    <GlobalStyle />
  </>
);

export default Layout;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;
