import React from 'react';
import styled from 'styled-components';

interface HeaderProp {
  title: string,
}

export default ({ title }: HeaderProp) => (
  <HeaderStyle>
    <div className="text">{title}</div>
  </HeaderStyle>
);

const HeaderStyle = styled.div`
  position: relative;
  top: 0px;
  width: 100%;
  height: 35px;
  background-color: #ff5722;
  opacity: 0.8;
  z-index: 1;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
  padding-top: 20px;
  .text{
      width: 100%;
      font-size: 30px;
      font-family: 'Bebas Neue', cursive;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.75;
      letter-spacing: 1.5px;
      text-align: center;
      color: #ffffff;
  }
`;
