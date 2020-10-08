import React from "react";
import { withRouter } from "react-router-dom";
import Typist from "react-typist";
import "../Pages/Main.scss";
import selfie from "../Images/selfie.jpeg";

function Main({ history }) {
  const goToProfile = () => {
    history.push("/profile");
  };
  console.log(history);
  return (
    <div className="Introduce">
      <div className="head">
        <Typist className="typingtext">
          <span>
            안 녕 하 세 요.
            <br />
            <Typist.Delay ms={1000} />
            F r o n t - e n d 개 발 자 <br />
            <Typist.Delay ms={1000} />이 승 민 입 니 다.
          </span>
        </Typist>
        <img
          className="selfie"
          src={selfie}
          alt="selfie"
          onClick={goToProfile}
        ></img>
      </div>
    </div>
  );
}

export default withRouter(Main);
