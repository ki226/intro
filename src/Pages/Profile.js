import React, { useState } from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import Project from "../Components/Project/Project";
import Career from "../Components/Career/Career";
import Contact from "../Components/Contact/Contact";
import "./Profile.scss";
import selfie from "../Images/selfie.jpeg";

function Profile() {
  const [buttonColor, setButtonColor] = useState({
    firstButton: false,
    secondButton: false,
    thirdButton: false,
    fourthButton: false,
  });

  const firstButtonColorHandle = () => {
    setButtonColor({
      firstButton: true,
      secondButton: false,
      thirdButton: false,
      fourthButton: false,
    });
  };

  const secondButtonColorHandle = () => {
    setButtonColor({
      secondButton: true,
      firstButton: false,
      thirdButton: false,
      fourthButton: false,
    });
  };

  const thirdButtonColorHandle = () => {
    setButtonColor({
      thirdButton: true,
      firstButton: false,
      secondButton: false,
      fourthButton: false,
    });
  };

  const fourthButtonColorHandle = () => {
    setButtonColor({
      fourthButton: true,
      firstButton: false,
      secondButton: false,
      thirdButton: false,
    });
  };

  return (
    <div className="Profile">
      <header className="main-selfie">
        <img className="selfie" src={selfie} alt="selfie"></img>
        <h1>LEE SEUNG MIN</h1>
      </header>
      <div className="nav">
        <ul className="profile-menu">
          <li
            className={`${buttonColor.firstButton ? "clicked" : "about-me"}`}
            onClick={firstButtonColorHandle}
          >
            ABOUT ME
          </li>
          <li
            className={`${
              buttonColor.secondButton ? "clicked" : "project-info"
            }`}
            onClick={secondButtonColorHandle}
          >
            PROJECT
          </li>
          <li
            className={`${buttonColor.thirdButton ? "clicked" : "career"}`}
            onClick={thirdButtonColorHandle}
          >
            CAREER
          </li>
          <li
            className={`${buttonColor.fourthButton ? "clicked" : "edu"}`}
            onClick={fourthButtonColorHandle}
          >
            CONTACT
          </li>
        </ul>
      </div>
      <div className="main-contents">
        <AboutMe buttonColor={buttonColor} />
        <Project buttonColor={buttonColor} />
        <Career buttonColor={buttonColor} />
        <Contact buttonColor={buttonColor} />
      </div>
    </div>
  );
}

export default Profile;
