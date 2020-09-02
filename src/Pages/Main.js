import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Typist from "react-typist";
import "../Styles/Main.scss";
import introduceImg from "../Images/introduceimg.png";
import selfie from "../Images/selfie.jpeg";

function Main() {
  return (
    <div className="Introduce">
      <div className="head">
        <Typist className="typingtext">
          <span>
            안 녕 하 세 요.
            <br />
            <Typist.Delay ms={1000} />
            F r o n t - e n d 신 입 개 발 자 <br />
            <Typist.Delay ms={1000} />이 승 민 입 니 다.
          </span>
        </Typist>
        <img className="selfie" src={selfie}></img>
      </div>
      <div className="resumeImg">
        <img src={introduceImg} />
      </div>
    </div>
  );
}

export default Main;
