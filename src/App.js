import React, { Component } from "react";
import Typist from "react-typist";
import "./App.scss";
import "./Typist.scss";
import introduceImg from "./introduceimg.png";
import selfie from "./selfie.jpeg";

class Introduce extends React.Component {
  render() {
    return (
      <div className="Introduce">
        <div className="head">
          <img className="selfie" src={selfie}></img>

          <Typist className="typingtext">
            <span>
              안 녕 하 세 요.
              <br />
              <Typist.Delay ms={1000} />
              F r o n t - e n d 신 입 개 발 자 <br />
              <Typist.Delay ms={1000} />이 승 민 입 니 다.
            </span>
          </Typist>
        </div>
        <img className="resume" src={introduceImg} />
      </div>
    );
  }
}

export default Introduce;
