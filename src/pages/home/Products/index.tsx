import React from 'react';
import './style.scss';

const Products: React.FC = () => {
  return (
    <div className='home-product-wrapper'>
      <div className='product-contain'>
        <img src="/assets/img/pad-hand.png" alt="pad"/>
        <div className='product-desc'>
          <h1>Products</h1>
          <div className='product-item'>
            南大家园 APP —— 改变，从这里开始
            <div className='product-green-bar product-green-bar-offset'></div>
          </div>
          <div className='product-item'>
            云家园 —— 数字化南大，尽在掌握
            <div className='product-green-bar'></div>
          </div>
          <div className='product-more'>
            MORE
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;
