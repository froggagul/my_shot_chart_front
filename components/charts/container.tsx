import React from 'react';
import styled from 'styled-components';
import { PieChart } from '.';

interface pieChartContainerProps {
  spot: number,
  counts: number[][],
}

export default ({ spot, counts }: pieChartContainerProps) => {
  const calcSpotRatio = (currSpot: number) => {
    if (counts[currSpot][0] + counts[currSpot][1] === 0) return 0;
    return (counts[currSpot][1] / (counts[currSpot][0] + counts[currSpot][1])).toFixed(2);
  };
  const calcAllRatio = () => {
    let shootNum = 0;
    let madeNum = 0;
    counts.forEach((count) => { shootNum += (count[0] + count[1]); madeNum += count[1]; });
    if (shootNum === 0) return 0;
    return (madeNum / shootNum).toFixed(2);
  };
  const calc2Ratio = () => {
    let shootNum = 0;
    let madeNum = 0;
    counts.forEach((count, idx) => {
      if (idx >= 2 && idx <= 7) {
        shootNum += (count[0] + count[1]);
        madeNum += count[1];
      }
    });
    if (shootNum === 0) return 0;
    return (madeNum / shootNum).toFixed(2);
  };
  const calc3Ratio = () => {
    let shootNum = 0;
    let madeNum = 0;
    counts.forEach((count, idx) => {
      if (idx < 2 || idx > 7) {
        shootNum += (count[0] + count[1]);
        madeNum += count[1];
      }
    });
    if (shootNum === 0) return 0;
    return (madeNum / shootNum).toFixed(2);
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
  return (
    <PieChartContainer>
      {/* 해당 spot의 종류에 따른 성공률 */}
      <PieChart title="2점 성공률" ratio={calc2Ratio()} display={(spot < 2 || spot > 7) ? 'none' : 'block'} barColor={ratioToColor(Number(calc2Ratio()) * 100)} />
      <PieChart title="3점 성공률" ratio={calc3Ratio()} display={(spot >= 2 && spot <= 7) ? 'none' : 'block'} barColor={ratioToColor(Number(calc3Ratio()) * 100)} />
      {/* 각 spot에서의 성공률 */}
      <PieChart title="Spot 성공률" ratio={calcSpotRatio(spot)} barColor={ratioToColor(Number(calcSpotRatio(spot)) * 100)} />
      {/* 총 성공률 */}
      <PieChart title="총 성공률" ratio={calcAllRatio()} barColor={ratioToColor(Number(calcAllRatio()) * 100)} />
    </PieChartContainer>
  );
};

const PieChartContainer = styled.div`
  position: relative;
  width: calc(100% - 40px);
  height: 100px;
  display: flex;
  margin: 20px;
`;
