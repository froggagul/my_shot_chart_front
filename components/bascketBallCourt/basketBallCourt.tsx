import React from 'react';
import styled from 'styled-components';
import * as basketBallProperties from './basketBallProperties';

interface basketBallCourtProp {
  spot: number,
  setSpot: React.Dispatch<React.SetStateAction<number>>,
}
interface pathProp {
  keys: number,
}
export default ({ spot, setSpot }: basketBallCourtProp) => {
  const counts = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
  const calcSpotRatio = (keys: number) => {
    if (counts[keys][0] + counts[keys][1] === 0) return 0;
    return (counts[keys][1] / (counts[keys][0] + counts[keys][1])).toFixed(2);
  };
  const ratioToColor = (ratio: number) => {
    let r = 0;
    let g = 0;
    if (ratio < 50) {
      r = 255;
      g = Math.round(5.1 * ratio);
    } else {
      g = 255;
      r = Math.round(510 - 5.10 * ratio);
    }
    const h = r * 0x10000 + g * 0x100;
    return `#${h.toString(16).slice(-6)}`;
  };

  const Path = styled.path<pathProp>`
  z-index: 1;
  pointer-events: visible;
  opacity: 0.5;
  fill: ${(props) => ratioToColor(Number(calcSpotRatio(props.keys)) * 100)};
  `;
  const Pathbasket = styled.path<pathProp>`
  z-index: 1;
  pointer-events: visible;
  fill: ${(props) => props.keys !== spot && 'none'};
  `;

  return (
    <SvgBox viewBox="-20 17 940 667" style={{ top: '10px' }}>
      {basketBallProperties.lines.map((item) => (
        <line
          x1={item.x1}
          x2={item.x2}
          y1={item.y1}
          y2={item.y2}
          style={{ strokeDasharray: '6, 6', strokeWidth: '2', opacity: '0.5', shapeRendering: 'crispEdges' }}
        />
      ))}
      <g stroke="#000000" fill="none" style={{ strokeWidth: '2', zIndex: -1 }}>
        <line x1="306" x2="306" y1="50" y2="392" style={{ shapeRendering: 'crispEdges' }} />
        <line x1="594" x2="594" y1="50" y2="392" style={{ shapeRendering: 'crispEdges' }} />
        <line x1="306" x2="594" y1="392" y2="392" style={{ shapeRendering: 'crispEdges' }} />
        <line x1="396" x2="504" y1="120.2" y2="120.2" style={{ shapeRendering: 'crispEdges' }} />
        <line x1="378" x2="378" y1="125.6" y2="148.1" style={{ shapeRendering: 'crispEdges' }} />
        <line x1="522" x2="522" y1="125.6" y2="148.1" style={{ shapeRendering: 'crispEdges' }} />
        <line x1="54" x2="54" y1="50" y2="306" style={{ shapeRendering: 'crispEdges' }} />
        <line x1="846" x2="846" y1="50" y2="306" style={{ shapeRendering: 'crispEdges' }} />
        <path d="M54,305A427.5,427.5 1 0,0 846,305" />
        <path d="M342,392A108,108 1 0,1 558,392" style={{ strokeDasharray: '22.5, 22.5' }} />
        <path d="M342,392A108,108 1 0,0 558,392" />
        <circle cx="450" cy="134.6" r="13.5" />
        <path d="M378,148.1A72,72 1 0,0 522,148.1" />
        <line x1="0" x2="900" y1="50" y2="50" style={{ shapeRendering: 'crispEdges', strokeWidth: '2' }} />
      </g>
      {basketBallProperties.areas.map(({ d }, index) => (
        <Path d={d} id="zone" keys={index} onClick={() => setSpot(index)} />
      ))}
      {basketBallProperties.areas.map(({ d }, index) => (
        <Pathbasket d={d} fill={`url(#img${index})`} id="zone" keys={index} onClick={() => setSpot(index)} />
      ))}
      <defs>
        {basketBallProperties.patterns.map(({ x, y }, index) => (
          <pattern id={`img${index}`} patternUnits="objectBoundingBox" width="100%" height="100%">
            <image href="/titleIcon.svg" x={x} y={y} width="50" height="50" />
          </pattern>
        ))}
      </defs>
    </SvgBox>
  );
};

const SvgBox = styled.svg`
  max-width:1000px;
  position: relative;
  top: 0px; left: 50%;
  transform:translate(-50%,0%);
  width: 100vw;
  height: 40vh;
  defs{
      z-index:2;
  }
`;
