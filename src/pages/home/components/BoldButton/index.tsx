import React from 'react';
import './style';

interface Props {
  text: string
  bgColor: '#fff' | '#B7ECB2'
}

const BoldButton: React.FC<Props> = ({ text }) => {
  return (
    <div className='bold-btn'>
      {text}
    </div>
  )
}

export default BoldButton;
