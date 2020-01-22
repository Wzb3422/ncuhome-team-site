import React from 'react';
import './style';

const Blog: React.FC = () => {
  return (
    <div className='home-blog-wrapper'>
      <div className='home-blog-left'>
        <div className='home-blog-l-bg'>
          <img src="/assets/img/home-blog.png" alt="blog"/>
        </div>
      </div>
      <div className='home-blog-right'>Right</div>
    </div>
  )
}

export default Blog;
