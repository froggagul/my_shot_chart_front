import React from 'react';
import styled from 'styled-components';
import { Header } from '.';

interface LayoutProp {
  title: string,
  children: JSX.Element,
}

export default ({ children, title }: LayoutProp) => {
  return (
    <Layout>
      <Header title={title} />
      {children}
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
  display: block;
  width: 100vw;
  height: 100vh;
  font-family: 'Noto Sans KR';
  font-size: 30px;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
`;
