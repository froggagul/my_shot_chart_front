import React from 'react';
import styled from 'styled-components';
import { CountButton } from '.';

interface containerProp {
  spot: number,
  counts: number[][],
  setCounts: React.Dispatch<React.SetStateAction<number[][]>>,
}

export default ({ spot, counts, setCounts }: containerProp) => {
  const setCount = (made: number, step: number) => {
    const tempArr = counts.slice();
    if (tempArr[spot][made] === 0 && step === -1) {
      // console.log('0 미만으로 입력하실 수 없습니다.');
      return;
    }
    tempArr[spot][made] += step;
    setCounts(tempArr);
  };
  return (
    <CountButtonsContainer>
      <CountButton
        title={'MADE'}
        plusOnClick={() => setCount(1, 1)}
        minusOnClick={() => setCount(1, -1)}
        value={counts[spot] ? counts[spot][1] : 0}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
          const tempArr = counts.slice();
          tempArr[spot][1] = Number(e.target.value);
          setCounts(tempArr);
        }}
      />
      <CountButton
        title="FAIL"
        plusOnClick={() => setCount(0, 1)}
        minusOnClick={() => setCount(0, -1)}
        value={counts[spot] ? counts[spot][0] : 0}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
          const tempArr = counts.slice();
          tempArr[spot][0] = Number(e.target.value);
          setCounts(tempArr);
        }}
      />
    </CountButtonsContainer>
  );
};

const CountButtonsContainer = styled.div`
  position: relative;
  width: calc(100% - 40px);
  height: 20%;
  display: flex;
  margin: 20px;
  margin-top: 30px;
  img{
      position:absolute;
      top: 100%;
      width: 24px;
      height:24px;
  }
`;
