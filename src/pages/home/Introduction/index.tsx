import React from 'react';
import './style.scss';

const Introduction: React.FC = () => {
  return (
    <div className='home-intro-wrapper'>
      <div className='intro'>
        <div className='intro-content'>
          <h1>NCUHOME</h1>
          <img src="/assets/img/characters.png" alt="NCUHOME"/>
          <p>家园工作室成立于2001年，是南昌大学一个互联网的学生社团组织</p>
          <p>以服务师生为目标，以改变世界为愿景</p>
          <p>发布上线了数款互联网产品，培养了许多优秀的互联网从业者</p>
        </div>
        <div className='intro-statistics'>
          <div className='statistics-item'>
            <img src="/assets/img/clock-icon.png" alt="avatar"/>
            <p>成立时间</p>
          </div>
          <div className='statistics-item'>
            <img src="/assets/img/avatar-icon.png" alt="avatar"/>
            <p>用户量</p>
          </div>
          <div className='statistics-item'>
            <img src="/assets/img/trophy-icon.png" alt="avatar"/>
            <p>获奖情况</p>
          </div>
        </div>
      </div>
      <div className='intro-bg'>
          <div className='green-bg'>
            <img src="/assets/img/intro-coder.png" alt="coder"/>
          </div>
      </div>
    </div>
  )
}

export default Introduction;
