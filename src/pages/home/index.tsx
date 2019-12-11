import React, { Suspense, lazy, useEffect, useState } from 'react';
import './index.scss';

const HomeHeader = lazy(() => import('./HomeHeader'));
const Introduction = lazy(() => import('./Introduction'));
const Products = lazy(() => import('./Products'));

const Home = () => {

  const [scrollX, setScrollX] = useState<number>(0);
  const [headerVisible, setHeaderVisible] = useState<boolean>(true);

  // 监听滚动
  useEffect(() => {
    window.onscroll = () => {
      setScrollX(document.body.scrollTop);
      if (scrollX > 276 && headerVisible === true) {
        setHeaderVisible(false);
      }
      if (scrollX <= 276 && headerVisible === false) {
        setHeaderVisible(true);
      }
    }
  });

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='home-content-limit'>
          <HomeHeader visible={headerVisible}/>
          <div
            className='scroll-content'
            style={{transform: `translateX(-${scrollX}px)`}}
          >
            <Introduction />
            <Products />
            <div className='scroll-content-item'></div>
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default Home;
