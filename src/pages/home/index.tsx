import React, { Suspense, lazy, useEffect, useState } from 'react';
import './index.scss';
import HorizontalScroll from '@src/pages/home/components/HorizontalScroll';
import { useMedia } from 'react-use';

const Ncuhome = lazy(() => import('./Ncuhome'));
const Products = lazy(() => import('./Products'));
const Blog = lazy(() => import('./Blog'));

const Pages: React.FC = () => {
  return (
    <>
      <Ncuhome />
      <Products />
      <Blog />
    </>
  )
} 

const Home = () => {

  const isWide = useMedia('(min-width: 768px)')

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {
          isWide ? (
            <HorizontalScroll>
              <Pages />
            </HorizontalScroll>
          ) : (<Pages />)
        }
        
      </Suspense>
    </>
  )
}

export default Home;
