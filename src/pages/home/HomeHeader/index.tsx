import React, { useState } from 'react';
import './style';

const headerItems = ['首页', '产品', '博客', '团队'];

interface Props {
  visible: boolean;
}

const HomeHeader: React.FC<Props> = ({ visible }) => {

  const [barOffsetX, setBarOffsetX] = useState<number>(0)

  const changeBarOffset = (index: number): void => {
    if (index !== 0) {
      setBarOffsetX(index * 107)
    } else {
      setBarOffsetX(0);
    }
  }

  return (
    <div
      className='home-header'
    >
      {visible ? (
        <>
          <ul>
            {headerItems.map((item, index) => {
              return (
                <li
                  key={item}
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
        </>
      ) : null}
    </div>
  )
}

export default HomeHeader;
