import React from "react";
import profilePic from "../profile-pic.jpeg";

export default function Header() {
  return (
    <div className="">
      <div className="header">
        <div className="profile-pic-box">
          <img src={profilePic} className="profile-pic" alt="self-logo" />
        </div>
        <h2 className="profile-name">Сергей Евгеньевич</h2>
        <h4 className="role">QA Engineer</h4>
        <a className="link" href="https://web.telegram.org/a/#5819371109">
          Telegram
        </a>
      </div>

      <div className="d-flex justify-content-center bcard-buttons">
        <button className="btn btn-light">
          <a href="mailto:pada1one@mail.ru" target="_blank" rel="noreferrer">
            Email
          </a>
        </button>
        <button className="btn  btn-light">
          <a
            href="https://github.com/PplWave/PplWave.github.io"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </button>
      </div>
    </div>
  );
}