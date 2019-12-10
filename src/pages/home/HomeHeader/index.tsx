import React, { useState } from 'react';
import './style';

const headerItems = ['首页', '产品', '博客', '团队'];

const HomeHeader: React.FC = () => {

  const [barOffsetX, setBarOffsetX] = useState<number>(0)

  const changeBarOffset = (index: number): void => {
    if (index !== 0) {
      setBarOffsetX(index * 107)
    } else {
      // pause for 300ms
      setTimeout(() => {
        setBarOffsetX(0);
      }, 300);
    }
  }

  return (
    <div className='home-header'>
      <ul>
        {headerItems.map((item, index) => {
          return (
            <li
              onMouseOver={() => {changeBarOffset(index)}}
              onMouseLeave={() => {changeBarOffset(0)}}
            >
              {item}
            </li>
          )
        })}
        <li>加入我们</li>
      </ul>
      <div
        className='home-header-bar'
        style={{transform: `translateX(${barOffsetX}px)`}}
      >
      </div>
    </div>
  )
}

export default HomeHeader;
