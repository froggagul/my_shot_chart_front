import React from 'react';
import { Layout } from '../components/layout';
import { BasketBallCourt } from '../components/bascketBallCourt';

export default () => {
  const [spot, setSpot] = React.useState(0);
  return (
    <Layout title={'My Shot Chart'}>
      <BasketBallCourt spot={spot} setSpot={setSpot} />
    </Layout>
  );
};
