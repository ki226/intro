import React, { useState } from "react";
import "./Project.scss";
import github from "../../Images/github.png";
import velog from "../../Images/velog.png";
import project from "../../Images/project.png";

function Project(props) {
  return (
    <div
      className={`${
        props.buttonColor.secondButton
          ? "project-info-content"
          : "project-info-hide"
      }`}
    >
      <img className="project-img" src={project} alt="project"></img>
      <ul className="content-box">
        <li className="first-project">
          1st Project
          <br />
          <b>Rush korea</b>
          <article className="first-project-content">
            <embed
              className="project-youtube"
              src="https://www.youtube.com/embed/J5wqvOV3fKU"
              alt="project"
            ></embed>
            <div className="icons">
              <div className="github-info">
                <img className="github" src={github} alt="github"></img>
                <p>
                  <a
                    className="github-link"
                    href="https://github.com/wecode-bootcamp-korea/9-rush-hour-frontend"
                    target="_blank"
                  >
                    https://github.com/wecode-bootcamp-korea/9-rush-hour-frontend
                  </a>
                </p>
              </div>
              <div className="velog-info">
                <img className="velog" src={velog} alg="velog"></img>
                <a
                  className="velog-link"
                  href="https://velog.io/@ki226/TIL-13-1차-프로젝트-후기"
                  target="blank"
                >
                  https://velog.io/@ki226/TIL-13-1차-프로젝트-후기
                </a>
              </div>
            </div>
          </article>
        </li>
        <li className="second-project">
          2nd Project
          <br />
          <b>Ikea korea</b>
          <article className="second-project-content">
            <embed
              className="project-youtube"
              src="https://www.youtube.com/embed/n8cuXJTWNzQ"
              alt="project"
            ></embed>
            <div className="icons">
              <div className="github-info">
                <img className="github" src={github} alt="github"></img>
                <a
                  className="github-link"
                  href="https://github.com/wecode-bootcamp-korea/9-ekek-frontend"
                  target="_blank"
                >
                  https://github.com/wecode-bootcamp-korea/9-ekek-frontend
                </a>
              </div>
              <div className="velog-info">
                <img className="velog" src={velog} alg="velog"></img>
                <a
                  className="velog-link"
                  href="https://velog.io/@ki226/TIL-14-2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0-zybbefpc"
                  target="blank"
                >
                  https://velog.io/@ki226/TIL-14-2차-프로젝트-후기
                </a>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  );
}

export default Project;
