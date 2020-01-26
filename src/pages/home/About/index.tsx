import React from "react";
import "./style";
import BoldButton from "../components/BoldButton";

const About: React.FC = () => {
  return (
    <div className="home-about-wrapper">
      <div className="home-about-content">
        <img className="home-about-circle" src="/assets/img/circle.png" />
        <div className="home-about-desc">
          <p className="home-about-title">Work&Play</p>
          <p className="home-about-text1">TOGETHER</p>
          <img src="/assets/img/line.png" />
          <p className="home-about-text2">家园欢迎每一位热爱互联网的的出色青年</p>
          <BoldButton text="Join us" bgColor="#B7ECB2" />
        </div>
      </div>
      <div className="home-about-bottom"></div>
    </div>
  );
};

export default About;
