import React, { Component } from "react";
import Typist from "react-typist";
import "./App.scss";
import "./Typist.scss";
import IntroducePdf from "./Front-end 이승민.pdf";
import introduceImg from "./introduceimg.png";

class Introduce extends React.Component {
  render() {
    return (
      <div className="Introduce">
        <Typist>
          <span>
            안 녕 하 세 요.
            <br />
            <Typist.Delay ms={1000} />
            f r o n t - e n d 신 입 개 발 자 <br />
            <Typist.Delay ms={1000} />이 승 민 입 니 다.
          </span>
        </Typist>
        <img className="image" src={introduceImg} />
      </div>
    );
  }
}

export default Introduce;
