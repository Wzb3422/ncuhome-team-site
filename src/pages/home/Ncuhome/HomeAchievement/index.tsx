import React from 'react';
import './style';

interface achivementItem {
  title: string
  iconPath: string
}

const achivements: achivementItem[] = [
  { title: '成立时间', iconPath: '/assets/img/clock-icon.png' },
  { title: '用户量', iconPath: '/assets/img/avatar-icon.png' },
  { title: '获奖情况', iconPath: '/assets/img/trophy-icon.png' }
];


const HomeAchievementItem: React.FC<achivementItem> = ({ title, iconPath }) => {
  return (
    <div className='home-ach-item'>
      <img
        className='home-ach-item-icon'
        src={iconPath}
      />
      <div className='home-ach-item-title'>{title}</div>
    </div>
  )
}

const HomeAchievement: React.FC = () => {
  return (
    <div className='home-ach'>
      {
        achivements.map(({title, iconPath}) => {
          return (
            <HomeAchievementItem
              title={title}
              iconPath={iconPath}
              key={title}
            />
          )
        })
      }
    </div>
  )
}

export default HomeAchievement;
