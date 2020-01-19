import React, { useEffect, useState } from 'react';
import './style';

const HorizontalScroll: React.FC = ({ children }) => {

  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setOffset(window.scrollY);
    })
  }, [])


  return (
    <div className='hs-content-limit' style={{transform: `translateY(${offset}px)`}}>
      <div className='hs-horizontal-content' style={{transform: `translateX(-${offset}px)`}}>
        {children}
      </div>
    </div>
  )
}

export default HorizontalScroll
