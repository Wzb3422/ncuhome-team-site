import React from "react";
import "./style";
import BoldButton from "../components/BoldButton";

const Team: React.FC = () => {
  return (
    <div className="home-team-wrapper">
      <div className="home-team-l-bg">
        <div className="home-team-text">
          <div className="home-team-title home-title">Team Work</div>
          <img src="/assets/img/circle.png" />
          <div className="home-team-desc">
            <p>家园人在工作</p>
            <p>全体大会上的我们</p>
          </div>
          <BoldButton text="MORE" bgColor="#fff" />
        </div>
        <img src="/assets/img/team-bg.png" alt="team" />
      </div>
    </div>
  );
};

export default Team;
