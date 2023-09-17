import React from "react";
import "./MailList.css";

export default function MailList({
  mId,
  From,
  Title,
  content,
  Time,
  activeMail,
  unread,
  handleMailClick,
}) {
  return (
    <div
      className={!activeMail ? "mail_container" : "mail_container active"}
      onClick={() => handleMailClick(mId)}
    >
      <h4>{From}</h4>
      <div className="mail_message">
        <p>{Title}</p>
        <p>{Time}</p>
      </div>
      <span>{content}</span>
    </div>
  );
}
