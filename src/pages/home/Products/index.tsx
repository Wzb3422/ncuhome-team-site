import React from 'react';
import './style';
import BoldButton from '../components/BoldButton';

const Products: React.FC = () => {
  return (
    <div className='home-prod-wrapper'>
      <div className='home-prod-left'>
        <img src="/assets/img/pad-hand.png" alt=""/>
      </div>
      <div className='home-prod-right'>
        <div className='home-prod-title home-title'>
          Products
          <div className='home-prod-tailling-s'>s</div>
        </div>
        <div className='home-prod-desc'>
          <p>南大家园APP —— 改变，从这里开始</p>
          <p>云家园 —— 数字化南大，尽在掌握</p>
        </div>
        <BoldButton text='MORE' bgColor='#fff'/>
      </div>
    </div>
  )
}

export default Products;
