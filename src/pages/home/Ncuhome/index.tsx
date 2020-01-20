import React, { Suspense, lazy } from 'react';
import './style'; 

const HomeHeader = lazy(() => import('./HomeHeader'));
const HomeDesc = lazy(() => import('./HomeDesc'));
const HomeAchievement = lazy(() => import('./HomeAchievement'));

const Ncuhome: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='ncuhome-wrapper'>
        <div className='ncuhome-left'>
          <HomeHeader />
          <HomeDesc />
          <HomeAchievement />
        </div>
        <div className='ncuhome-right'>
          <div className='ncuhome-rt-bg'>
            <img src="/assets/img/intro-bg.png" alt=""/>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default Ncuhome;
