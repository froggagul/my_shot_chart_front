import React from 'react';
import { Layout } from '../components/layout';
import { BasketBallCourt } from '../components/bascketBallCourt';
import { PieChartContainer } from '../components/charts';
import { CountButtonContainer } from '../components/buttons';

export default () => {
  const [spot, setSpot] = React.useState(0);
  const [counts, setCounts] = React.useState([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);

  return (
    <Layout title={'My Shot Chart'}>
      <>
        <BasketBallCourt spot={spot} setSpot={setSpot} counts={counts} />
        <PieChartContainer spot={spot} counts={counts} />
        <CountButtonContainer spot={spot} counts={counts} setCounts={setCounts} />
      </>
    </Layout>
  );
};
