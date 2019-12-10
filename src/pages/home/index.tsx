import React, { Suspense, lazy } from 'react';
import './index.scss';

const HomeHeader = lazy(() => import('./HomeHeader'));

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='home-content-limit'>
          <HomeHeader />
          <div className='scroll-content'>
            <div className='scroll-content-item'></div>
            <div className='scroll-content-item'></div>
            <div className='scroll-content-item'></div>
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default Home;
