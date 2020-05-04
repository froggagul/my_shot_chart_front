import * as React from 'react';
import styled from 'styled-components';

interface pieChartProps {
  barColor: string,
  display?: string,
  ratio: string | number,
  title: string,

}
export default ({ barColor, ratio, display, title }: pieChartProps) => (
  <PieChart barColor={barColor} ratio={ratio} display={display} title={title}>
    <div className="pie">
      <div className="center" />
      <div className="text">{ratio}</div>
    </div>
    <div className="title">{title}</div>
  </PieChart>
);

const PieChart = styled.div<pieChartProps>`
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0% calc(16.67% - 50px);
    display: ${(props) => props.display};
    .title {
        position: relative;
        text-align: center;
        margin: 10px;
        width: 120%;
        right: 20%;
        font-size: 15px;
        font-weight: 100;
    }
    .pie {
        position: relative;
        display:inline-block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transition: 0.3s;
        background:conic-gradient(${(props) => props.barColor} ${(props) => Number(props.ratio) * 100}%, #fff ${(props) => Number(props.ratio) * 100 + 2}% 100%);
        .center {
            background: #fff;
            position: absolute;
            top:50%; left:50%;
            width:80%;
            height:80%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }
        .text {
            position: absolute;
            top:50%; left:50%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            font-size: 20px;
            font-weight: 100;
            font-stretch: normal;
            font-style: oblique;
            line-height: 1.17;
            letter-spacing: normal;
        }
    }
`;
