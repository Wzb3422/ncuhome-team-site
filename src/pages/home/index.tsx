import React, { Suspense, lazy, useEffect, useState } from 'react';
import './index.scss';
import HorizontalScroll from 'Src/components/HorizontalScroll';

const Ncuhome = lazy(() => import('./Ncuhome'));
const Products = lazy(() => import('./Products'));

const Home = () => {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HorizontalScroll>
          <Ncuhome />
          <Ncuhome />
          {/* <Products /> */}
        </HorizontalScroll>
      </Suspense>
    </>
  )
}

export default Home;
