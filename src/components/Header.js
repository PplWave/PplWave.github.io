import React from "react";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="profile-pic-box">
          <img
            src="/images/profile-pic.jpeg"
            className="profile-pic"
            alt="self-logo"
          />
        </div>
        <h2 className="profile-name">Сергей Евгеньевич</h2>
        <h4 className="role">QA Engineer</h4>
        <a className="link" href="https://t.me/5819371109" target="_blank" rel="noreferrer">
          Telegram
        </a>
      </div>

      <div className="d-flex justify-content-center bcard-buttons">
        <a href="mailto:pada1one@mail.ru" className="btn btn-light" target="_blank" rel="noreferrer">
          Email
        </a>
        <a
          href="https://github.com/PplWave"
          className="btn btn-light"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}
