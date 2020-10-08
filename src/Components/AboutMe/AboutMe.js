import React from "react";
import "./AboutMe.scss";
import developer from "../../Images/developer.png";

function AboutMe(props) {
  return (
    <div
      className={`${
        props.buttonColor.firstButton ? "about-me-content" : "about-me-hide"
      }`}
    >
      <img className="developer-img" src={developer} alt="developer"></img>
      <span>
        저는 wecode 부트캠프 9기를 수료했으며, 수강 기간 동안 React,
        Javascript를 이용한 그룹 프로젝트 (clone프로젝트) 를 진행했습니다.
        <br />
        <br />
        이후에는 'sell up' 이라는 동대문 사입자 업무 관리 앱을 서비스하고 있는
        쉐어 그라운드라는 회사에서 4주간 인턴으로 근무하였고, 인턴 기간 동안에는
        'sell-up' 이라는 앱의 웹 버전을 React, Typescript를 통해서 제작하는
        프로젝트를 진행했습니다.
        <br />
        <br />
        <b>
          저는 새로운 것, 새로운 지식에 대한 호기심이 높고 늘 새로운 것을
          배우고자 노력합니다. 겉모습만 보고 수박 겉핥기 식의 배움 보다 좀 더
          그것의 본질을 탐구하고 더 깊이 파고들고 싶어하는 욕심이 강합니다.
        </b>
        <br />
        <br />
        저는 여럿이서 함께하는 업무에 있어서 사람들과의 소통을 늘 가장
        중요시하며, 저의 의견을 피력하면서도 상대방을 배려하고 서로의 의견을
        효과적으로 조율하기 위해 노력합니다.
        <br />
        <br />
        <b>
          저는 4년간의 고객지원 업무 경험을 바탕으로 늘 유저 입장에서 생각하고
          어떻게 하면 유저가 보다 더 나은 경험을 할 수 있을지에 대해 늘
          고민합니다.
        </b>
      </span>
    </div>
  );
}

export default AboutMe;
