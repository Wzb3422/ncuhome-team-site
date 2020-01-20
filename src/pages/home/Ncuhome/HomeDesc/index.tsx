import React from 'react';
import './style';

const HomeDesc: React.FC = () => {
  return (
    <div className='home-desc'>
      <div className='home-name'>
        <div className='home-desc-eng'>
          NCUHOME
        </div>
        <img src="/assets/img/characters.png" alt=""/>
      </div>
      
      <div className='home-desc-intro'>
        <p>家园工作室成立于2001年，是南昌大学一个互联网的学生社团组织</p>
        <p>以服务师生为目标，以改变世界为愿景</p>
        <p>发布上线了数款互联网产品，培养了许多优秀的互联网从业者</p>
      </div>
    </div>
  )
}

export default HomeDesc;
