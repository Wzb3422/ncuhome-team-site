import React, { Suspense, lazy, useEffect, useState } from 'react';
import './index.scss';

const HomeHeader = lazy(() => import('./HomeHeader'));

const Home = () => {

  const [scrollX, setScrollX] = useState<number>(0);

  useEffect(() => {
    window.onscroll = () => {
      setScrollX(document.body.scrollTop);
    }
  })

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='home-content-limit'>
          <HomeHeader />
          <div
            className='scroll-content'
            style={{transform: `translateX(-${scrollX}px)`}}
          >
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
