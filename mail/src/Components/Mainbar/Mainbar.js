import React, { useState, useContext } from "react";
import "./Mainbar.css";

import MailList from "./MailList/MailList";

import { DataContext } from "../../Context/DataProvider";

export default function Mainbar() {
  const [activeMail, setactiveMail] = useState(123);
  const [inbox, Spam, setSelectedFolder] = useContext(DataContext);
  const handleMailClick = (mail) => {
    console.log(mail);
    setactiveMail(mail);
  };

  return (
    <div className="main_container">
      <div className="mainbar_header">
        <p className="focused">Focused</p>
        <p>Other</p>
      </div>
      <MailList
        mId={1}
        From={"User 1"}
        subject={"Test mail"}
        content={"Test content"}
        Time={5.58}
        unread={true}
        activeMail={activeMail === 1}
        handleMailClick={handleMailClick}
      />
      <MailList
        mId={2}
        From={"User 2"}
        subject={"Test mail 2 "}
        content={"Test content 2"}
        Time={17.25}
        unread={true}
        activeMail={activeMail === 2}
        handleMailClick={handleMailClick}
      />
    </div>
  );
}
