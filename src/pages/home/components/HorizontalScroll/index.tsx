import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import './style';

const HorizontalScroll: React.FC = ({ children }) => {

  // const [offset, setOffset] = useState<number>(0);

  const {x, y} = useWindowScroll();

  return (
    <div className='hs-content-limit' style={{transform: `translateY(${y}px)`}}>
      <div className='hs-horizontal-content' style={{transform: `translateX(-${y}px)`}}>
        {children}
      </div>
    </div>
  )
}

export default HorizontalScroll
