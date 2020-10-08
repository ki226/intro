import React, { useState } from "react";
import "./Career.scss";
import career from "../../Images/career.jpg";

function Career(props) {
  const [careerInfo, setCareerInfo] = useState([
    {
      class: "first",
      id: 1,
      company: "(주) ITXM",
      term: "2014.06 ~ 2015.09",
      role: "사원 / 영업부",
    },
    {
      class: "second",
      id: 2,
      company: "(주) 비바리퍼블리카",

      term: "2016.08 ~ 2018.01",
      role: "팀원 / 고객행복팀",
    },
    {
      class: "third",
      id: 3,
      company: "(주) 스트리미",
      term: "2018.01 ~ 2020.04",
      role: "팀원 / compliance팀",
    },
    {
      class: "fourth",
      id: 4,
      company: "(주) 쉐어그라운드",
      term: "2020.07 ~ 2020.08",
      role: "인턴 / 개발팀",
    },
  ]);

  console.log("careerInfo", careerInfo);
  return (
    <div
      className={`${
        props.buttonColor.thirdButton ? "career-content" : "career-hide"
      }`}
    >
      <img className="career-img" src={career} alt="career"></img>
      {careerInfo &&
        careerInfo.map((career, idx) => (
          <div className={career.class} key={idx}>
            <h3>
              {career.id}. {career.company}
            </h3>
            <br />
            <span>
              <b>근무 기간</b> : {career.term}
            </span>
            <br />
            <br />
            <span>
              <b>직급 / 직책</b> : {career.role}
            </span>
          </div>
        ))}
    </div>
  );
}

export default Career;
